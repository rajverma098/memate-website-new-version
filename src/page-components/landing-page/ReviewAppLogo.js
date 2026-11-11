import Link from 'next/link';
import React from 'react';
import './ReviewAppLogo.css';

const logos = [
  {
    href: 'https://share.google/xx2fGHt4nyQ9Zz7jt',
    src: 'https://memate-website.s3.ap-southeast-2.amazonaws.com/memate-google-review-logo.png',
    alt: 'meMate Google Review',
  },
  {
    href: 'https://www.productreview.com.au/listings/memate',
    src: 'https://memate-website.s3.ap-southeast-2.amazonaws.com/memate-awards-winner-logo.png',
    alt: 'meMate Awards Winner',
  },
  {
    href: 'https://www.capterra.com.au/software/1025204/memate',
    src: 'https://memate-website.s3.ap-southeast-2.amazonaws.com/memate-capterra-review-logo.png',
    alt: 'meMate Capterra Review',
  },
  {
    href: 'https://www.softwareadvice.com.au/software/342497/memate',
    src: 'https://memate-website.s3.ap-southeast-2.amazonaws.com/memate-software-advice-review-logo.png',
    alt: 'meMate Software Advice Review',
  },
  {
    href: 'https://www.getapp.com.au/software/2054882/memate',
    src: 'https://memate-website.s3.ap-southeast-2.amazonaws.com/memate-getuser-review-logo.png',
    alt: 'meMate Getuser Review',
  },
];

const ReviewAppLogo = () => {
  const shouldSlide = logos.length > 5;

  // Always render 2 identical groups for a seamless -50% loop
  const group = logos;
  const marqueeLogos = [...group, ...group];

  return (
    <div className="memateRewardWrap">
      <div
        className={`memateRewardTrack ${
          shouldSlide ? 'is-sliding' : 'is-static'
        }`}
      >
        {marqueeLogos.map((logo, index) => (
          <Link
            key={index}
            href={logo.href}
            target="_blank"
            className="memateRewardItem"
          >
            <img src={logo.src} alt={logo.alt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ReviewAppLogo;