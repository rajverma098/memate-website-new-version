"use client";

import Image from "next/image";
import "./InfiniteImageScroll.css";

const images = [
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/removalistsListInfinite01.jpg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/removalistsListInfinite02.jpg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/removalistsListInfinite03.jpg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/removalistsListInfinite04.jpg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/removalistsListInfinite05.jpg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/removalistsListInfinite06.jpg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/removalistsListInfinite07.jpg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/removalistsListInfinite08.jpg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/removalistsListInfinite09.jpg",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/removalistsListInfinite10.jpeg",
];

function ImageCard({ src, className = "" }) {
  return (
    <div className={`cleaning-image-card ${className}`}>
      <Image
        src={src}
        alt="Cleaning business"
        fill
        sizes="150px"
        priority
      />
    </div>
  );
}

function ImageGrid() {
  return (
    <div className="cleaning-image-grid">
      <ImageCard src={images[0]} />
      <div className="cleaning-stack">
        <ImageCard src={images[1]} />
        <ImageCard src={images[2]} />
      </div>
      <ImageCard src={images[3]} />
      <div className="cleaning-stack">
        <ImageCard src={images[4]} />
        <ImageCard src={images[5]} />
      </div>
      <ImageCard src={images[6]} />
      <div className="cleaning-stack">
        <ImageCard src={images[7]} />
        <ImageCard src={images[8]} />
      </div>
      <ImageCard src={images[9]} />
    </div>
  );
}

export default function InfiniteImageScroll() {
  return (
    <section className="cleaning-infinite-images">
      <div className="cleaning-infinite-track">
        <ImageGrid />
        <ImageGrid />
        <ImageGrid />
        <ImageGrid />
      </div>
    </section>
  );
}