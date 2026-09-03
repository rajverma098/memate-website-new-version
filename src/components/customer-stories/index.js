import React, { useRef } from "react";
import "./style.css";
import "./storiesNew.css";
import Link from 'next/link';
import { useRouter } from "next/navigation"; 
// import StoriesImageSlider from './storiesslider'

// import { Helmet } from 'react-helmet-async';

const CustomerStoriesImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/camerafixVideo.jpg";
const customersoriesProImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesPro.png";
const customersoriesEliteImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesElite.png";
const customersoriesBoatImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesBoat.png";
const customersoriesSortedImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesSorted.jpg";

function CustomerStories() {
    const videoRef = useRef(null);
    const router = useRouter();
  
    const handleMouseEnter = () => {
      if (videoRef.current) videoRef.current.play().catch(()=>{});
    };
  
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  };
  
  
    const handleClick = (e) => {
      e.preventDefault();
      // navigate to the case study route
      router.push('/customer-stories/camera-fix');
    };
  return (
<>
<div className="StoriesNewWrap">
<div className="StoriesHead">
  <h1>Success Stories: Real Businesses, Real Results with meMate</h1>
  <h2 className="smokeyGradient">customer stories</h2>
  {/* <h3>Power of meMate Put to Work</h3> */}
  <p>How Small Businesses Use meMate in Their Everyday Activities to Increase Profitability</p>
</div>
<div className="StoriesNewGrid">
    <div className="StoriesGridItem"> {/* Grid Item1 */}
    <div className="imgBox">
       <Link href="/customer-stories/case-study-provinyl-car-wrapping-business-software"><img
    className="img-container-stories"
    src={customersoriesProImage}
    alt="Blog featured image"
  /></Link> 
    </div>
    <div className="textBox">
       <span>PROvinyl</span> 
       <h4>Running a Car Wrapping Company on meMate</h4>
       <Link href="/customer-stories/case-study-provinyl-car-wrapping-business-software">View story</Link>
    </div>
    </div>{/* Grid Item1 */}
    <div className="StoriesGridItem"> {/* Grid Item1 */}
    <div className="imgBox">
         {/* <Link href='/customer-stories/camera-fix'><img
    className="img-container-stories"
    src={CustomerStoriesImage}
    alt="Blog featured image"
  /></Link> */}
    <div
            className="imageBox"
            role="button"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(e); }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ outline: 'none', cursor: 'pointer' }}
            aria-label="Open Camera Fix case study"
          >
        <div className="desktopVersionVideo">
              <video
            ref={videoRef}
            width="100%"
            height="100%"
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            poster={CustomerStoriesImage} 
          >
            <source
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/social_meMate-camera.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="MobileVersionVideo">
              <video
            width="100%"
            height="100%"
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            controls={false}
            poster={CustomerStoriesImage} 
          >
            <source
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/social_meMate-camera.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
            </div> 
    </div>
    <div className="textBox">
       <span>Camera Fix</span>
       <h4>Empowering a Boutique Camera Repair Shop to Manage Business and Serve Over 100 Clients Monthly</h4>
       <Link href="#">View story</Link>
    </div>
    </div>{/* Grid Item1 */}
    <div className="StoriesGridItem"> {/* Grid Item1 */}
    <div className="imgBox">
       <Link href="/customer-stories/elite-life"><img
    className="img-container-stories"
    src={customersoriesEliteImage}
    alt="Blog featured image"
  /></Link>
    </div>
    <div className="textBox">
       <span>Elite Life</span>
       <h4>Using meMate to Run a Private Membership Club</h4>
       <Link href="/customer-stories/elite-life">View story</Link>
    </div>
    </div>{/* Grid Item1 */}
    <div className="StoriesGridItem"> {/* Grid Item1 */}
    <div className="imgBox">
      <Link href="/customer-stories/boat-wizard" ><img
    className="img-container-stories"
    src={customersoriesBoatImage}
    alt="Blog featured image"
  /></Link> 
    </div>
    <div className="textBox">
       <span>Boat Wizard</span>
       <h4>We quote and invoice all our marine engineering services.</h4>
       <Link href="/customer-stories/boat-wizard">View story</Link>
    </div>
    </div>{/* Grid Item1 */}
    <div className="StoriesGridItem"> {/* Grid Item1 */}
    <div className="imgBox">
       <Link href="/customer-stories/sorted-media" ><img
    className="img-container-stories"
    src={customersoriesSortedImage}
    alt="Blog featured image"
  /></Link> 
    </div>
    <div className="textBox">
       <span>Sorted Media</span>
       <h4>Photography and Videography on Demand</h4>
       <Link href="/customer-stories/sorted-media">View story</Link>
    </div>
    </div>{/* Grid Item1 */}
</div>
</div>
{/* <StoriesImageSlider /> */}
{/* <div className="parent-blog-page customerstoriespage">
      <div className="parent-blog">
        <div className="heading-container">
        <div className="heading-blog-description">
            <h1 className="heading-text-blog2">How Businesses Use MeMate | Customer Stories & Results</h1>
          </div>
          <h2 className="heading-blog2">
          customer  <br></br>stories
          </h2>
          <div className="heading-blog-description">
            <h1 className="heading-text-blog2">Power of meMate Put to Work</h1>
          </div>
          <div className="small-headingF"> <p>How Small Businesses Use meMate in Their Everyday Activities to Increase Profitability</p></div>
       
        </div>
<div className="customerstoriesGrid">
<div className="innerGrid">
 <Link href='/customer-stories/camera-fix'><img
    className="img-container-stories"
    src={CustomerStoriesImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">
              <div className="category">Camera Fix</div>
              <div className="date-heading-title"><Link href='/customer-stories/camera-fix'>Empowering a Boutique Camera Repair Shop to Manage Business and Serve Over 100 Clients Monthly</Link></div>
             <Link href='/customer-stories/camera-fix' className="readMoreBut">Read More</Link>
            </div>
          </div>
<div className="innerGrid">
 <Link href="/customer-stories/case-study-provinyl-car-wrapping-business-software"><img
    className="img-container-stories"
    src={customersoriesProImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">
              <div className="category">PROvinyl</div>
              <div className="date-heading-title"><Link href="/customer-stories/case-study-provinyl-car-wrapping-business-software">Running a Car Wrapping Company on meMate</Link></div>
             <Link href="/customer-stories/case-study-provinyl-car-wrapping-business-software" className="readMoreBut">Read More</Link>
            </div>
          </div>
<div className="innerGrid">
 <Link href="/customer-stories/elite-life"><img
    className="img-container-stories"
    src={customersoriesEliteImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">  
              <div className="category">Elite Life</div>
              <div className="date-heading-title"><Link href="/customer-stories/elite-life">Using meMate to Run a Private Membership Club</Link></div>
             <Link href="/customer-stories/elite-life" className="readMoreBut">Read More</Link>
            </div>
          </div>
<div className="innerGrid">
 <Link href="/customer-stories/boat-wizard" ><img
    className="img-container-stories"
    src={customersoriesBoatImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">  
              <div className="category">Boat Wizard</div>
              <div className="date-heading-title"><Link href="/customer-stories/boat-wizard">We quote and invoice all our marine engineering services.</Link></div>
             <Link href="/customer-stories/boat-wizard" className="readMoreBut">Read More</Link>
            </div>
          </div>
<div className="innerGrid">
 <Link href="/customer-stories/sorted-media" ><img
    className="img-container-stories"
    src={customersoriesSortedImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">  
              <div className="category">Sorted Media</div>
              <div className="date-heading-title"><Link href="/customer-stories/sorted-media">Photography and Videography on Demand</Link></div>
             <Link href="/customer-stories/sorted-media" className="readMoreBut">Read More</Link>
            </div>
          </div>


       </div>
      </div>
    </div> */}
    </>

  );
}
export default CustomerStories;
