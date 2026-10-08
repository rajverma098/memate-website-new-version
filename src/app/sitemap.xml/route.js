// app/sitemap.xml/route.js
import { readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const API_BASE = 'https://admin.memate.com.au/api';
const API_KEY = '3fa85f64d51b6c8e74313f7c69aef82d';

const SKIP_FOLDERS = [
  'api', 'sitemap.xml', 'components', 'layout',
  'page-components', 'assets', 'data', 'font', 'svg', 'subprocessors',
];

const EXCLUDE_PATTERNS = [
  '/thank-you',
  '/watch-demo',
  '/terms',
  '/security',
  '/subprocessors',
  '/news/tags',       // ✅ remove news tag URLs
];

const headers = { 'X-Api-Key': API_KEY };

async function apiGet(path) {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: 'GET',
      headers,
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error(`❌ ${path} → ${res.status}`);
      return null;
    }
    return res.json();
  } catch (err) {
    console.error(`❌ ${path} →`, err.message);
    return null;
  }
}

function toArray(result, ...keys) {
  if (!result) return [];
  if (Array.isArray(result)) return result;
  for (const k of ['data', ...keys]) {
    if (Array.isArray(result[k])) return result[k];
  }
  return [];
}

// ---------- Static pages ----------
function findPages(dir, baseDir, pages = []) {
  try {
    for (const item of readdirSync(dir)) {
      const full = join(dir, item);
      const stat = statSync(full);

      if (stat.isDirectory()) {
        if (SKIP_FOLDERS.includes(item)) continue;
        if (item.startsWith('[') || item.startsWith('_')) continue;
        findPages(full, baseDir, pages);
      } else if (/^page\.(jsx?|tsx?)$/.test(item)) {
        const rel = relative(baseDir, dir).replace(/\\/g, '/');
        pages.push(rel === '' ? '/' : `/${rel}`);
      }
    }
  } catch {}
  return pages;
}

// ---------- Blogs (news posts) ----------
async function getBlogUrls() {
  const data = await apiGet('/news?page=1&limit=1000&category_id=0');
  const blogs = toArray(data, 'news', 'items');
  console.log(`📰 Blogs: ${blogs.length}`);

  return blogs
    .filter((b) => b?.slug)
    .map((b) => ({
      url: `/news/${b.slug}`,
      lastmod: b.updated_at || b.updatedAt || b.created_at,
      priority: 0.7,
    }));
}

// ❌ getTagUrls() REMOVED — no more /news/tags URLs

// ---------- Suppliers ----------
async function getSupplierUrls() {
  const data = await apiGet('/supplier-lists?page=1&limit=1000');
  const suppliers = toArray(data, 'suppliers', 'items');
  console.log(`🏢 Suppliers: ${suppliers.length}`);

  return suppliers
    .filter((s) => s?.slug)
    .map((s) => ({
      url: `/supplier-database/${s.slug}`,
      lastmod: s.updated_at || s.updatedAt,
      priority: 0.5,
    }));
}

// ---------- Knowledge base ----------
async function getKnowledgeUrls() {
  const data = await apiGet('/knowledge');
  const items = toArray(data, 'knowledge');
  console.log(`📚 Knowledge: ${items.length}`);

  return items
    .filter((k) => k?.slug || k?.title_slug)
    .map((k) => ({
      url: `/knowledge-base/${k.slug || k.title_slug}`,
      priority: 0.6,
    }));
}

// ---------- Software updates ----------
async function getUpdateUrls() {
  const data = await apiGet('/update');
  const items = toArray(data, 'updates');
  console.log(`📝 Updates: ${items.length}`);

  return items
    .filter((u) => u?.slug)
    .map((u) => ({
      url: `/memate-software-updates/${u.slug}`,
      lastmod: u.created_at || u.updated_at,
      priority: 0.5,
    }));
}

// ---------- Main ----------
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://memate.com.au';

  const appDir = join(process.cwd(), 'src', 'app');
  const staticPages = findPages(appDir, appDir)
    .filter((p) => !EXCLUDE_PATTERNS.some((x) => p.toLowerCase().includes(x)))
    .map((p) => ({
      url: p,
      priority: p === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }));

  console.log(`🗂️  Static pages: ${staticPages.length}`);

  // Fetch in parallel (no tags fetch)
  const [blogs, suppliers, knowledge, updates] = await Promise.all([
    getBlogUrls(),
    getSupplierUrls(),
    getKnowledgeUrls(),
    getUpdateUrls(),
  ]);

  const allUrls = [
    ...staticPages,
    ...blogs,
    ...suppliers,
    ...knowledge,
    ...updates,
  ];

  // Deduplicate + final safety filter for /news/tags
  const seen = new Set();
  const unique = allUrls.filter((u) => {
    if (seen.has(u.url)) return false;
    if (u.url.includes('/news/tags')) return false;   // ✅ extra safety
    seen.add(u.url);
    return true;
  });

  console.log(`✅ TOTAL URLs: ${unique.length}`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique
  .map(
    (u) => `  <url>
    <loc>${baseUrl}${u.url === '/' ? '' : u.url}</loc>
    <lastmod>${u.lastmod ? new Date(u.lastmod).toISOString() : new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      // ✅ nofollow for the sitemap response
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control':
        'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}