'use client'
// import Layout from "../../layout";
import React from "react";
// import Blog from "../../components/blog";
import AppWrapper from "../../components/AppWrapper";
import NewsPageFullWithMeta from '../news-page-component'
const BlogPage = ({ posts, PostsCategories, activeCategory, handleTabClick, postsLatest, totalPosts, loading, handleNext }) => {
  // console.log('posts: ', posts);
  return (
    <AppWrapper>
      <NewsPageFullWithMeta posts={posts} PostsCategories={PostsCategories} activeCategory={activeCategory} handleTabClick={handleTabClick} postsLatest={postsLatest} totalPosts={totalPosts} loading={loading} handleNext={handleNext} />
    </AppWrapper>
  );
};

export default BlogPage;