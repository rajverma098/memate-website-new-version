"use client";

import LogoDownload from "./LogoDownload";



import ImageClickDownload from "./ImageClickDownload";
export default function ColorPlateGrid() {
  return (
    <div className="brand-assets">
      <section>
        <div className="typography-grid">
             <ImageClickDownload 
            image="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/typo01.png"
            download="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/Sequel.zip"
              alt="Typography Sequel"
              aria-label="Typography Sequel"
              title="Click to download Typography Sequel"
          />
             <ImageClickDownload 
            image="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/typo02.png"
            download="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/Inter.zip"
            alt="Typography Inter"
              aria-label="Typography Inter"
              title="Click to download Typography Inter"
          />
        </div>
      </section>
    </div>
  );
}
