
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
import Link from "next/link";
const CARDS = [
  {
     logoStories: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo-stories.png",
      title: "Phasellus in elit quis ipsum ultricies",
      button: "View story",
      linkButton: "/",
      alt: "logo-stories"
  },
  {
     logoStories: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo-stories.png",
      title: "Phasellus in elit quis ipsum ultricies",
      button: "View story",
       linkButton: "/",
      alt: "logo-stories"
  },
  {
     logoStories: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo-stories.png",
      title: "Maecenas sed magna non dolor",
      button: "View story",
      linkButton: "/",
      alt: "logo-stories"
  },
    {
     logoStories: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo-stories.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      button: "View story",
      linkButton: "/",
      alt: "logo-stories"
  },
  {
     logoStories: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo-stories.png",
      title: "Maecenas sed magna non dolor",
      button: "View story",
     linkButton: "/",
      alt: "logo-stories"
  },
  {
     logoStories: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo-stories.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      button: "View story",
       linkButton: "/",
      alt: "logo-stories"
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


const StoriesImageSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "50px", 
    slidesToShow: 5,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    // nextArrow: <Arrow direction="next" />,
    // prevArrow: <Arrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 3,
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
      <div className="otherSroriesSlider">
      <div className="head">
        <h2 className="heading">Other stories</h2>
      </div>

      <div className="slider-shell">
        <div className="fade fade-left" />
        <div className="fade fade-right" />
        <Slider {...settings}>
          {CARDS.map((card, i) => (
            <div key={i}>
              <article className="card">
                <div className="card-overlay" />
                <div className="card-content">
                  <div className="cardImage">
                    <img src={card.logoStories} alt={card.alt} />
                    </div>
                <div className="cardDis">
                    <h3 className="card-title">{card.title}</h3>
                  <Link href={card.linkButton}>{card.button}</Link>
                </div>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>  
      </div>  
  </>
  );
};

export default StoriesImageSlider;
