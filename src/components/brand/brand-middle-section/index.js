import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { usePathname } from "next/navigation";
import { Link } from "react-scroll";
import LogoGrid from "./LogoGrid";
import IconsLogoGrid from "./IconsLogoGrid";
import TypographyGrid from "./TypographyGrid";
import EmailSignatureGrid from "./EmailSignatureGrid";
import CompanyLetterheadGrid from "./CompanyLetterheadGrid";

const knowledgeData = [
  {
    id: 1,
    name: "Brand Guidelines ",
    description: `
   <div class="brandTabsGuidelines">
    <h3>How to use these Guidelines:</h3>
    <p>Just like building a great workspace, there are many elements that make up the meMate brand. From a solid foundation of values, through to the tools, features, and personality that power everyday business, the meMate experience takes shape.</p>
    <p>Starting with our tone of voice, typeface, colours, and visual style, our brand comes to life. These guidelines are here to help you create communications with clarity, consistency, and the flexibility to adapt to different audiences and situations.</p>
    <p>By following them, every interaction will stay true to the meMate brand — professional, approachable, and built for Australian businesses.</p>
   </div>
`,
  },
  {
    id: 2,
    name: "Brand Files",
    component: <LogoGrid />,
  },
  {
    id: 3,
    name: "Icons",
    component: <IconsLogoGrid />,
  },
 
  {
    id: 4,
    name: "Color Palette",
   description: `
   <div class="things-to-avoid-guidelines">
 <p>The gradient transition from blue to orange in our brand palette symbolizes a journey from stability and trust to energy and innovation. The blue tones represent reliability and professionalism, while the warm orange hues convey enthusiasm and creativity. </p>
 <p>This gradient reflects meMate’s commitment to providing dependable business management solutions while embracing forward-thinking and dynamic approaches. </p>
<img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/color-palette-image.png" style="width: 100%; height: auto;" alt="Icons" />
   </div>
`,
  },
   {
    id: 5,
    name: "Typography",
    component: <TypographyGrid />,
  },
   {
    id: 6,
    name: "Email Signature",
    component: <EmailSignatureGrid />,
  },
   {
    id: 7,
    name: "Company Letterhead",
    component: <CompanyLetterheadGrid />,
  },
  {
    id: 8,
    name: "Examples",
   description: `
   <div class="things-to-avoid-guidelines">
   <h3>Examples of the brand in use</h3>
<img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/example01.png" style="width: 100%; height: auto;" alt="Icons" />

 <h3>Social media examples</h3>
<img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/brand/socialmedia-memate.png" style="width: 100%; height: auto;" alt="Icons" />
   </div>
`,
  },

];

const MiddleSection = () => {
  const pathname = usePathname();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [knowledge, setKnowledge] = useState([]);
  const [activeItem, setActiveItem] = useState(knowledgeData[0]?.id);
  const [activeChild, setActiveChild] = useState(null);

  const observerRef = useRef(null);
  const initialized = useRef(false);
  useEffect(() => {
    setKnowledge(knowledgeData);
    // setActiveItem(0);
    // setKnowledge(0);
  }, []);

useEffect(() => {
  if (knowledge.length === 0) return;

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = Number(entry.target.id.split("-")[1]);
        setActiveItem(id);
      }
    });
  };

  observerRef.current = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "-30% 0px -50% 0px",
    threshold: 0.1,
  });

  const headings = document.querySelectorAll(".b-section-headingMain");
  headings.forEach((heading) =>
    observerRef.current.observe(heading)
  );

  return () => observerRef.current.disconnect();
}, [knowledge]);


  // const handleClick = (id) => {
  //   setActiveItem(id);
  // };
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Helmet>
        <title>Brand</title>
        <meta property="og:title" content="brand" />
        <meta property="og:description" content="" />
      </Helmet>
      <div className="kb-wrapper memate-brand-wrap">
  <div className="mobileSideBarAction">
  <button onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? "Hide Sections" : "Show Sections"}
</button>

{isOpen && (
  <div className="kb-left-wrapper1  kb-tos-wrapper1 heightProvier">
    {knowledge.map((item) => (
      <ul className="kb-list" key={item.id}>
        <li
          className={`kb-list-item1 ${
            activeItem === item.id ? "kb-list-item-active1" : ""
          }`}
        >
          <Link
  to={`section-${item.id}`}
  smooth={true}
  spy={true}
  offset={-120}
  duration={500}
  className="ssSBDisFont fontSize16"
>
  {item.name}
</Link>

        </li>

        {activeItem === item.id && item.children && (
          <ul className="nested-tabs">
            {item.children.map((child) => (
              <li
                key={child.id}
                className={`nested-tab ${
                  activeChild === child.id ? "active" : ""
                }`}
              >
                <Link
                  to={`section-${item.id}-child-${child.id}`}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => {
                    setActiveChild(child.id);
                  }}
                >
                  {child.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </ul>
    ))}
  </div>
)}
  </div>

<div className="kb-left-wrapper1  desktopSideBarAction kb-tos-wrapper1 heightProvier">
    {knowledge.map((item) => (
      <ul className="kb-list" key={item.id}>
        <li
          className={`kb-list-item1 ${
            activeItem === item.id ? "kb-list-item-active1" : ""
          }`}
        >
          <Link
            to={`section-${item.id}`}
            smooth={true}
            offset={-100}
            duration={500}
            onSetActive={() => {
              setActiveItem(item.id);
              setActiveChild(null);
            }}
            className="ssSBDisFont fontSize16"
          >
            {item.name}
          </Link>
        </li>

        {activeItem === item.id && item.children && (
          <ul className={`nested-tabs nested-tabs${item.id}`}>
            {item.children.map((child) => (
              <li
                key={child.id}
                className={`nested-tab ${
                  activeChild === child.id ? "active" : ""
                }`}
              >
                <Link
                  to={`section-${item.id}-child-${child.id}`}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => {
                    setActiveChild(child.id);
                  }}
                >
                  {child.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </ul>
    ))}
  </div>

       <div className="kb-right-wrapper brandRightGrid kbMemateTab memate-brand-right">
  {knowledge.map((item) => (
    <div className="kb-right-section" key={item.id}>
      <h1
        className="ssSBDisFont fontSize42 b-section-headingMain"
        id={`section-${item.id}`}
      >
        {item.name}
      </h1>

      {/* HTML content */}
      {item.description && (
        <div dangerouslySetInnerHTML={{ __html: item.description }} />
      )}

      {/* React component content */}
      {item.component && (
        <div className="brand-component-wrapper">
          {item.component}
        </div>
      )}

      {/* Children */}
      {item.children &&
        item.children.map((child) => (
          <div key={child.id}>
            <h2
              className="ssSBDisFont fontSize42 b-section-headingMain"
              id={`section-${item.id}-child-${child.id}`}
            >
              {child.name}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: child.description }}
            />
          </div>
        ))}
    </div>
  ))}
</div>

      </div>
    </>
  );
};

export default MiddleSection;
