"use client";

import LogoDownload from "./LogoDownload";


export default function EmailSignatureGrid() {
  return (
    <div className="brand-assets">
      <section>
        <div className="logoGrid1SingleFull">
          <LogoDownload
            image="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/company-letterhead-memate.png"
            downloads={{
              fig: "https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/company-letterhead-Fig.zip",
              pdf: "https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/company-letterhead-PDF.zip",
              zip: "https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/memate-company-letterhead.zip",
            }}
          />
      
        </div>
      </section>
    </div>
  );
}
