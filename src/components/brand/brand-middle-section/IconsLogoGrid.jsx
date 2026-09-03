"use client";


import ImageClickDownload from "./ImageClickDownload";


export default function IconsLogoGrid() {
  return (
    <div className="brand-assets">
      <section>
        <div className="logo-grid1">
            <div className="memateLogoIcons">
            <ImageClickDownload 
            image="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/memate-icon-dark.png"
            download="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/memate-brand-icons-dark.fig"
             alt="MeMate Brand Icons Dark"
              aria-label="MeMate Brand Icons Dark"
              title="Click to download MeMate Brand Icons Dark"
          />
             <ImageClickDownload 
            image="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/memate-icon-gradient.png"
            download="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/memate-brand-icons.fig"
             alt="MeMate Brand Icons Gradient"
              aria-label="MeMate Brand Icons Gradient"
              title="Click to download MeMate Brand Icons Gradient"
          />
             <ImageClickDownload 
            image="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/memate-icon-light.png"
            download="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/memate-brand-icons-light.fig"
             alt="MeMate Brand Icons Light"
              aria-label="MeMate Brand Icons Light"
              title="Click to download MeMate Brand Icons Light"
          />
              </div>
      
         
        </div>
         <div className="things-to-avoid-guidelines">
                <h5>Things to avoid:</h5>
               <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/things-to-avoid-image.png" width="100%"  alt="Icons" /> 
            </div>
      </section>

    </div>
  );
}
