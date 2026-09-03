const SCREEN_IMAGE =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/1.png";
const FRAME_IMAGE =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/mobile-img12_va9ume.png";

export default function MobileScrollSection() {
  return (
    <section className="mobile-demo-section gridboxstreamline item2">
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="scroll-content">
            <img
              src={SCREEN_IMAGE}
              className="screen-image"
              alt="Track every expense and time allocated to your projects"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <img
          src={FRAME_IMAGE}
          className="frame-image"
          alt="Phone Frame"
          loading="lazy"
          decoding="async"
        />
      </div>

      <h4>
        Track Every Expense and Time <br />
        Allocated to Your Projects
      </h4>
    </section>
  );
}
