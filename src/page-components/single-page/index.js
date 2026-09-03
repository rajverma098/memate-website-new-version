import Layout from "../../layout";
import React from "react";
import Single from "../../components/single-page";

const SinglePage = ({posts, postsLatest, slug, initialPost, serverArticle, ...otherProps}) => {

  return (
    <Layout>
      <Single 
        postsSingle={posts} 
        postsLatest={postsLatest}
        slug={slug}
        initialPost={initialPost}
        serverArticle={serverArticle}
        {...otherProps}
      />
    </Layout>
  );
};
export default SinglePage;