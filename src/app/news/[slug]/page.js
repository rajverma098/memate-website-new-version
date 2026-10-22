import React, { cache } from 'react';
import { notFound } from 'next/navigation';
import { blogSingle } from '../../../api/blogAPI';
import ClientBlogPost from './ClientBlogPost';
import ArticleServerContent from './ArticleServerContent';

const getPost = cache(async (slug) => blogSingle(slug));

const BASE_URL = 'https://memate.com.au';
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-default.jpg`;
const DEFAULT_SECTION = 'Industry Insights and Best Practices';

/**
 * Normalise an author value coming out of the CMS.
 * - Rejects placeholder values like "admin"
 * - Falls back to the Organization name so E-E-A-T isn't undermined
 */
function resolveAuthor(author) {
  if (!author || typeof author !== 'string') return 'MeMate';
  const cleaned = author.trim().toLowerCase();
  if (!cleaned || cleaned === 'admin' || cleaned === 'administrator') return 'MeMate';
  return author.trim();
}

/**
 * Normalise an image URL.
 * - Makes it absolute
 * - Replaces spaces with hyphens (fixes "When the Tide Goes Out.jpeg")
 */
function resolveImageUrl(rawUrl) {
  if (!rawUrl) return DEFAULT_OG_IMAGE;
  let url = rawUrl;
  if (!url.startsWith('http')) {
    url = url.startsWith('/') ? `${BASE_URL}${url}` : `${BASE_URL}/${url}`;
  }
  return url.replace(/\s+/g, '-');
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    const post = await getPost(slug);

    if (!post || post.error) {
      return {
        title: 'News Article Not Found | MeMate',
        description: 'The requested news article could not be found.',
        robots: { index: false, follow: true }, // don't index 404-style pages
        openGraph: {
          title: 'News Article Not Found | MeMate',
          description: 'The requested news article could not be found.',
          url: `${BASE_URL}/news/${slug}`,
          siteName: 'MeMate',
          images: [{
            url: DEFAULT_OG_IMAGE,
            width: 1200,
            height: 630,
            alt: 'MeMate - Business Management Software',
          }],
          type: 'article',
          locale: 'en_AU',
        },
        twitter: {
          card: 'summary_large_image',
          title: 'News Article Not Found | MeMate',
          description: 'The requested news article could not be found.',
          images: [DEFAULT_OG_IMAGE],
          creator: '@memateapp',
          site: '@memateapp',
        },
      };
    }

    const postUrl = `${BASE_URL}/news/${slug}`;
    const imageUrl = resolveImageUrl(post.featured_img_url || post.thumbnail_img_url);
    const imageWidth = post.featured_img_width || 1200;
    const imageHeight = post.featured_img_height || 630;

    // --- Description cleanup ---
    let cleanDescription = post.meta_description;
    if (!cleanDescription && post.description) {
      cleanDescription = post.description
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 155) + '...';
    }
    if (!cleanDescription) {
      cleanDescription =
        "Read the latest news and updates from MeMate — Australia's leading business management software.";
    }

    const title = post.seo_title || post.title || 'News Article | MeMate';
    const socialTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;

    // --- Author: never "admin" ---
    const authorName = resolveAuthor(post.author);

    // --- Section: never default to "General"/"News" ---
    const section = post.category?.title || DEFAULT_SECTION;

    // --- Tags: real tags only, never the auto-split headline ---
    // If your CMS doesn't expose structured tags yet, this stays empty
    // rather than echoing the headline back into schema.
    const tags = Array.isArray(post.tags)
      ? post.tags
          .map((t) => (typeof t === 'string' ? t : t?.name))
          .filter(Boolean)
      : [];

    return {
      title,
      description: cleanDescription,
      // keywords: intentionally omitted — Google ignores the meta keywords
      // tag, and post.meta_keyword was auto-split from the headline.

      authors: [{ name: authorName }],

      openGraph: {
        title: socialTitle,
        description: cleanDescription,
        url: postUrl,
        siteName: 'MeMate',
        images: [{
          url: imageUrl,
          width: imageWidth,
          height: imageHeight,
          alt: post.featured_img_alt || post.title || 'MeMate News Article',
        }],
        locale: 'en_AU',
        type: 'article',
        publishedTime: post.publish_date
          ? new Date(post.publish_date).toISOString()
          : undefined,
        modifiedTime: post.updated_at
          ? new Date(post.updated_at).toISOString()
          : (post.publish_date ? new Date(post.publish_date).toISOString() : undefined),
        authors: [authorName],
        section,
        tags,
      },

      twitter: {
  card: 'summary_large_image',
  title: socialTitle,
  description: cleanDescription,
  images: [imageUrl],
  creator: '@memateapp',
  site: '@memateapp',
},

  alternates: {
  canonical: postUrl,
  languages: {
    'en-AU': postUrl,
    'en-NZ': postUrl,
    'x-default': postUrl,
  },
},

      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },

      // `other` block REMOVED.
      // It was re-emitting article:author / article:published_time /
      // article:modified_time / article:section — all of which Next.js
      // already renders from the openGraph object above. That duplication
      // is what Google flagged.
    };

  } catch (error) {
    console.error('❌ Error generating metadata for news slug:', error);

    return {
      title: 'News Article | MeMate',
      description:
        "Read the latest news and updates from MeMate — Australia's leading business management software.",
      robots: { index: false, follow: true },
      openGraph: {
        title: 'News Article | MeMate',
        description: 'Read the latest news and updates from MeMate.',
        url: `${BASE_URL}/news/${slug}`,
        siteName: 'MeMate',
        images: [{
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: 'MeMate - Business Management Software',
        }],
        type: 'article',
        locale: 'en_AU',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'News Article | MeMate',
        description: 'Read the latest news and updates from MeMate.',
        images: [DEFAULT_OG_IMAGE],
        creator: '@memateapp',
        site: '@memateapp',
      },
    };
  }
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = await getPost(slug);

  if (!post || post.error) {
    notFound();
  }

  return (
    <main>
      <ClientBlogPost params={resolvedParams} initialPost={post}>
        <ArticleServerContent post={post} />
      </ClientBlogPost>
    </main>
  );
}