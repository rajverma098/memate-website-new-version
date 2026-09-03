import Link from 'next/link';
import NewsSchema from '../../../components/blog/news-schema';
import Images from '../../../assests/blog-images';

const arrowIconBack =
  'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg';

export default function ArticleServerContent({ post }) {
  if (!post) return null;

  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://memate.com.au/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'News',
        item: 'https://memate.com.au/news/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://memate.com.au/news/${post.slug}`,
      },
    ],
  };

  const article = {
    type: 'NewsArticle',
    headline: post.title,
    datePublished: (() => {
      const d = post.publish_date ? new Date(post.publish_date) : null;
      return d && !Number.isNaN(d.getTime()) ? d.toISOString() : undefined;
    })(),
    dateModified: (() => {
      const raw = post.updated_at || post.publish_date;
      const d = raw ? new Date(raw) : null;
      return d && !Number.isNaN(d.getTime()) ? d.toISOString() : undefined;
    })(),
    author: post.author || 'MeMate News',
    publisherName: 'MeMate Media',
    publisherLogo:
      'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg',
    image: post.featured_img_url || Images.blogImgempty,
    url: `https://memate.com.au/news/${post.slug}`,
    keywords: post.keywords || post.title?.split(' ').slice(0, 5).join(', '),
    genre: post.category?.title || 'General',
    articleSection: post.category?.title || 'General',
  };

  const publishDate = post.publish_date
    ? new Date(post.publish_date).toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '';

  return (
    <>
      <NewsSchema article={article} breadcrumbList={breadcrumbList} />

      <div className="pageBreadcrumbs">
        <ul className="postlist">
          <li>
            <Link className="MainHomeLink" href="/">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link className="MainPageLink" href="/news">
              Latest Articles
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/news/${post.slug}`}>{post.title}</Link>
          </li>
        </ul>
        <Link href="/news" className="backButStories">
          <img src={arrowIconBack} alt="Arrow" /> Back
        </Link>
      </div>

      {post.category?.title && (
        <div className="accounting-text-A categoryLinkTitle ">
          <Link href={`/news/category/${post.category?.id}`}>
            {post.category.title}
          </Link>
        </div>
      )}

      <h1 className="singlePageheading">{post.title}</h1>
      <div className="singlePageDate">
        {publishDate} | Editorial - AUSTRALIAN BUSINESS
      </div>

      <div className="img-1-container-A img-1-container-singlenews">
        {post.video_url ? (
          <video className="img-1" autoPlay loop muted playsInline>
            <source src={post.video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : post.featured_img_url ? (
          <img className="img-1" src={post.featured_img_url} alt={post.title} />
        ) : post.thumbnail_img ? (
          <img className="img-1" src={post.thumbnail_img} alt={post.title} />
        ) : (
          <img className="img-1" src={Images.blogImgempty} alt={post.title} />
        )}
      </div>

      <div className="heading-2-text-A single-page-heading-text parentSingleBlogMemate">
        <div dangerouslySetInnerHTML={{ __html: post.description }} />
      </div>

      {(post.meta_keyword || '').trim() && (
        <div className="blogMetstags">
          <strong>Tags</strong>
          <div className="blogloopdata">
            {(post.meta_keyword || '').split(',').map((tag, index) => {
              const tagSlug = (post.meta_keyword_slug || '')
                .split(',')[index]
                ?.trim();
              return (
                <span key={index} className="tag">
                  <Link
                    href={`/news/tags/${tagSlug || tag.trim().toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {tag.trim()}
                  </Link>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
