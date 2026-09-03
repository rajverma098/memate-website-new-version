import React from "react";
import Layout from "../../layout";
import Blog from "../../components/blog";

export default function NewsPageFullWithMeta({posts, PostsCategories, activeCategory, handleTabClick, postsLatest, totalPosts, loading, handleNext }) {
  return (
    <Layout>
      <div className="bgshadowwrapper">
        <Blog
          PostsCategories={PostsCategories}
          activeCategory={activeCategory}
          handleTabClick={handleTabClick}
          posts={posts}
          postsLatest={postsLatest}
          totalPosts={totalPosts}
          loading={loading}
          handleNext={handleNext}
        />
      </div>
    </Layout>
  );
}

{
  /* <Layout>
<div className="bgshadowwrapper">
<Blog PostsCategories={PostsCategories} activeCategory={activeCategory} handleTabClick={handleTabClick} posts={posts} postsLatest={postsLatest} totalPosts={totalPosts} loading={loading} handleNext={handleNext} />
</div>
</Layout> */
}
