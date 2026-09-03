import Script from "next/script";

export default function LinkedInCampaign() {
  return (
    <>
      <Script id="linkedin-legalvision" strategy="afterInteractive">
        {`
          _linkedin_legalvision_id = "8351404";
          window._linkedin_data_legalvision_ids = window._linkedin_data_legalvision_ids || [];
          window._linkedin_data_legalvision_ids.push(_linkedin_legalvision_id);
        `}
      </Script>

      <Script
        id="linkedin-insight"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(l) {
              if (!l){
                window.lintrk = function(a,b){
                  window.lintrk.q.push([a,b])
                };
                window.lintrk.q=[]
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript"; b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=8351404&fmt=gif"
        />
      </noscript>
    </>
  );
}
