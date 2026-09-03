const MARQUEE_IMAGE =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/fffff_f9uwhw.png";

export default function ScrollAnimation() {
  const images = Array(6).fill(MARQUEE_IMAGE);

  return (
    <div className="gridboxstreamline item1">
      <div className="bg-scroll">
        <div className="scroll-track">
          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img}
              className="bg-img"
              alt={
                index === 0 ? "MeMate business management software" : ""
              }
              aria-hidden={index > 0}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
      <h4>
        A system designed for complete <br />
        control over business activities
      </h4>
    </div>
  );
}
