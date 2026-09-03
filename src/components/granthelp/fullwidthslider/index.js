
import Slider from "react-slick";
import './style.css'
const CARDS = [
  {
    title: "Repair Companies",
    subtitle: "Electronics, Appliances, Equipment Repair",
    desc: "Quote jobs, log diagnostics, track repair status, and assign tasks to techs or contractors.",
    image: "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slider-01.png",
  },
  {
    title: "Automotive Businesses",
    subtitle: "Car Wrapping, Detailing, Customisation Workshops",
    desc: "Schedule jobs, manage project stages, send approvals, and keep payments clear across services.",
    image: "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slider-02.png",
  },
  {
    title: "Creative Agencies",
    subtitle: "Photographers, Videographers, Digital Studios",
    desc: "Track bookings, send quotes, manage revisions, and invoice clients — all from one place.",
    image: "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slider-03.png",
  },
  {
    title: "Landscapers & Outdoor Services",
    subtitle: "Designers, Installers, Garden Maintenance Teams",
    desc: "Organise projects, assign subcontractors, manage stages, and stay on top of budgets.",
    image: "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slider-04.png",
  },
  {
    title: "Construction Teams",
    subtitle: "Small Builders, Fit-out Crews, Contractors",
    desc: "Quote, schedule work, upload before/after photos, and send invoices on completion.",
    image: "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slider-05.png",
  },
  {
    title: "Boat Dealers & Marine Services",
    subtitle: "Sales + Onboarding + Post-sale Service",
    desc: "From quoting custom fit-outs to managing workshop & contractors and follow-up service — all tracked.",
    image: "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/slider-06.png",
  },
];

function PrevIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M20.12 5.44006L11.4267 14.1334C10.4 15.1601 10.4 16.8401 11.4267 17.8667L20.12 26.5601"
        stroke="#757B8A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M11.88 26.5599L20.5733 17.8666C21.6 16.8399 21.6 15.1599 20.5733 14.1333L11.88 5.43994"
        stroke="#757B8A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Arrow({ onClick, direction }) {
  return (
    <button
      type="button"
      className={`arrow arrow-${direction}`}
      onClick={onClick}
    >
      {direction === "next" ? <NextIcon /> : <PrevIcon />}
    </button>
  );
}


const WhyBusinessesChooseUs = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "100px", 
    slidesToShow: 3,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
  <>
    <section className="fullWidthChSection">
      <div className="container">
        <h2 className="heading">Why Aussie Businesses Choose Us</h2>
        <p className="subtitle">
          Whether you’re on the tools or behind the desk, MeMate is built to
          match how you actually work.
        </p>
      </div>

      <div className="slider-shell">
        <div className="fade fade-left" />
        <div className="fade fade-right" />
        <Slider {...settings}>
          {CARDS.map((card, i) => (
            <div key={i}>
              <article
                className="card"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="card-overlay" />
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-subtitle">{card.subtitle}</p>
                  <p className="card-description">{card.desc}</p>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .fullWidthChSection {
          color: #fff;
          padding: 0px 0 80px;
          width: 100vw;
          margin-left: calc(50% - 50vw); 
        }

        .fullWidthChSection .container {
          max-width: 1120px;
          margin: 0 auto 24px;
          padding: 0 24px;
        }

        .fullWidthChSection .heading {
             color: #29292B;
            text-align: center;
            font-size: 48px;
            font-style: normal;
            font-weight: 415;
            line-height: 60px;
            letter-spacing: -1.44px;
            font-family: sequel_sans !important;
        }

        .fullWidthChSection .subtitle {
              color: #888E9E;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 360;
    line-height: 32px;
    letter-spacing: -.72px;
    font-family: sequel_sans_roman_head !important;
    max-width: 690px;
    margin-top: 17px;
    margin-bottom: 46px;
    margin: 0 auto;
        }

        .fullWidthChSection .slider-shell {
          position: relative;
          margin-top: 36px;
          padding: 0 0px;
        }
        :global(.center .slick-slide) {
          padding: 10px;
        }

       .fullWidthChSection .card {
          position: relative;
          height: 50vh;
          min-height: 480px;
          border-radius: 28px;
          overflow: hidden;
          background-size: cover;
          background-position: center;
       
        }

           .fullWidthChSection .card-overlay {
          position: absolute;
       
        
        }

        .fullWidthChSection .card-content {
          position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%);
    padding: 27px;
        }

      .fullWidthChSection .card-title {
          margin: 0 0 6px;
          color: #fff;
          font-size: 32px;
          font-style: normal;
          font-weight: 360;
          line-height: 40px;
           width: 380px;
          letter-spacing: -.72px;
          font-family: "sequel_sans_bold_head"!important;
      }
       .fullWidthChSection .card-subtitle {
              color: #ccd1df;
            letter-spacing: -.72px;
            width: 316px;
            margin: 0 0 6px;
            font-size: 18px;
            font-style: normal;
            font-weight: 360;
            line-height: 24px;
            font-family: sequel_sans_bold_head !important;
            display: inline-block;
              }

        .fullWidthChSection .card-description {
          margin: 0 0 6px;
          color: #fff;
          font-size: 16px;
          width: 365px;
          font-style: normal;
          font-weight: 360;
          line-height: 20px;
          letter-spacing: -.72px;
          font-family: 'sequel_sans_medium_head' !important;
        }
        .fullWidthChSection .arrow {
          position: absolute;
          top: 50%;
          z-index: 5;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: none;
          background: #ffffff;
          color: #111827;
          font-size: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.45);
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease,
            background 0.15s ease;
        }

        .fullWidthChSection .arrow-prev {
          left: 22px;
        }

        .fullWidthChSection .arrow-next {
          right: 22px;
        }

        .fullWidthChSection .arrow:hover {
          transform: translateY(-50%) translateY(-1px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6);
        }

        .fullWidthChSection .arrow:active {
          transform: translateY(-50%);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
        }

        /* Map arrow component props class names */
        :global(.slick-prev),
        :global(.slick-next) {
          display: none !important; /* hide default slick arrows */
        }
        .fullWidthChSection .fade {
          pointer-events: none;
          position: absolute;
          top: 0;
          bottom: 0;
          width: 90px;
          z-index: 4;
        }

        .fullWidthChSection .fade-left {
          left: 0;
          // background: linear-gradient(
          //   to right,
          //   #111827,
          //   rgba(17, 24, 39, 0)
          // );
        }

        .fullWidthChSection .fade-right {
          right: 0;
          // background: linear-gradient(
          //   to left,
          //   #111827,
          //   rgba(17, 24, 39, 0)
          // );
        }

        @media (max-width: 1024px) {
          .fullWidthChSection .slider-shell {
            padding: 0 20px;
          }

          .fullWidthChSection .card {
            height: 360px;
          }

          .fullWidthChSection .arrow-prev {
            left: 8px;
          }

          .fullWidthChSection .arrow-next {
            right: 8px;
          }
        }

        @media (max-width: 768px) {
        .fullWidthChSection .card {
          min-height: 382px;
      }

          .fullWidthChSection .heading {
            font-size: 23px;
          }
.fullWidthChSection .card-title {
    width: 100%;
    margin: 0 0 6px;
    font-size: 24px;
    line-height: 33px;
}
    .fullWidthChSection .card-subtitle {
    letter-spacing: 0;
    width: 100%;
    margin: 0 0 6px;
    font-size: 15px;
}
    .fullWidthChSection .card-description {
    letter-spacing: 0;
    width: 100%;
    margin: 0 0 6px;
    font-size: 14px;
    font-weight: 360;
    line-height: 20px;
}
    .fullWidthChSection .card-content {
    bottom: 32px;
    left: 17px;
    right: 17px;
}
        .fullWidthChSection .subtitle {
    font-size: 18px;
}

          .fullWidthChSection .slider-shell {
            padding: 0 0 0 0;
          }

          .fullWidthChSection .fade {
            display: none;
          }

          .fullWidthChSection .card {
            height: 340px;
            border-radius: 24px;
          }
            .fullWidthChSection {
    padding: 0px 0 18px;
}

        }
      `}</style>
    </section>

      
  </>
  );
};

export default WhyBusinessesChooseUs;
