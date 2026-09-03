import React from 'react'
import style from './thankyou.module.scss';
import Images from "../../assests/images";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Helmet } from 'react-helmet-async';
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";
// import './thankyou.css'

const ThankYouComponents  = () => {

  const router = useRouter();

  return (
   <>
    <Helmet>
    <title>Thank You for Choosing meMate | Business Software You Trust</title>
    <meta name="description" content="Thank you for trusting meMate. Our tools make it easy to manage tasks, teams, and growth so your business runs smoother every day." />
    <meta property="og:title" content="Thank You for Choosing meMate | Business Software You Trust" />
    <meta property="og:description" content="Thank you for trusting meMate. Our tools make it easy to manage tasks, teams, and growth so your business runs smoother every day." />
  </Helmet>
    <div className={`${style.Errorpage}`}>
    <div className={`${style.imgText}`}>
        <h3>thank <br></br> You </h3>
        <img className={style.images} src={Images.koalaTransparent} alt={Images.koalaTransparent} />
      </div>
    <div className={`${style.TextHead}`}>
        <h1 className='h1tagsseo fontSize42-2'>Thank You from meMate – We Value Your Business</h1>
        <p className='fontAndText'>Your support means the world to us. We’re excited to continue this journey together!</p>
        <div className={`${style.button}`}>
        <Link href="#" onClick={() => router.back()} ><img src={arrowIconBack} alt="Arrow" /> <span className='ssMDFont'>Back</span></Link>
        <Link className='ssMDFontWhite' href="/" ><span>Home</span></Link>
      </div>
      </div>
      </div> 
   </> 
  )
}

export default ThankYouComponents 