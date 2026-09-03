'use client'
import React from 'react'
import Layout from '../../layout'
import PhotoPageContent from '../../components/photo-video-agency'

// import AppWrapper from '../../components/AppWrapper'
// import { Helmet } from 'react-helmet-async'

const PhotoPage = ({postsLatest}) => {
  return (
    <>
    <Layout>
      <PhotoPageContent postsLatest={postsLatest}/>
    </Layout>

    </>
  )
}

export default PhotoPage
