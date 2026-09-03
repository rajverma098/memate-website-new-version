"use client";

import ImageClickDownload from "./ImageClickDownload";


export default function EmailSignatureGrid() {
  return (
    <div className="brand-assets">
      <section>
        <div className="typography-grid emailSig-grid">
          <ImageClickDownload 
            image="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/MeMate-Grey-Text-660x75-Alpha.gif"
            download="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/email-signature-memate-grey-alpha.zip"
             alt="MeMate Grey Alpha"
              aria-label="MeMate Grey Alpha"
              title="Click to download MeMate Grey Alpha"
          />
          <ImageClickDownload 
            image="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/MeMate-Grey-BG-675x75.gif"
            download="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/email-signature-memate-grey-bg.zip"
             alt="MeMate-Grey-BG"
              aria-label="MeMate Grey BG"
              title="Click to download MeMate Grey BG"
          />
        </div>
      </section>
    </div>
  );
}
