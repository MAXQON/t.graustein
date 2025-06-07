import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
import Iframe from "react-iframe";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ARTIST_ID = ""; // Replace with the actual artist ID

const Portfolio = ({ classicHeader, darkTheme }) => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [autoplayActive, setAutoplayActive] = useState(true);

  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        setLoading(true);
        // ... (your existing fetch logic)
        const response = await fetch(
          `/api/spotify/artist-releases/${ARTIST_ID}?market=ID`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const uniqueReleases = Array.from(
          new Map(data.map((item) => [item.id, item])).values()
        );
        setReleases(uniqueReleases);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch Spotify releases:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, []);

  const handleItemInteraction = () => {
    setAutoplayActive(false);
  };
  const handleMouseLeaveCarousel = () => {
    // When mouse leaves the entire carousel area, resume autoplay
    // You might want to add a delay here or more complex logic
    // to ensure it doesn't resume too quickly if a player is still active.
    setAutoplayActive(true);
  };

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the carousel
    autoplay: autoplayActive, // Controlled by state
    autoplaySpeed: 3000,
    speed: 500, // Animation speed
    slidesToScroll: 1, // Scroll one slide at a time
    pauseOnHover: false, // We will manage this manually
    //pauseOnFocus: true,
    // Default settings for desktop (or larger screens)
    slidesToShow: 3,

    // Responsive settings
    responsive: [
      {
        breakpoint: 1480, // Applies when screen width is 1480px or less
        settings: {
          slidesToShow: 2, // Show 2 items on tablets/laptops
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100, // Applies when screen width is 1100px or less (typical tablet portrait)
        settings: {
          slidesToShow: 1, // Show 1 items
          slidesToScroll: 1,
          initialSlide: 0, // Start from the first slide
        },
      },
      {
        breakpoint: 480, // Applies when screen width is 480px or less (typical mobile)
        settings: {
          slidesToShow: 1, // Show 1 items on mobile
          slidesToScroll: 1,
          initialSlide: 0, // Start from the first slide
        },
      },
      {
        breakpoint: 320, // Applies when screen width is 320px or less (smaller mobile)
        settings: {
          slidesToShow: 1, // Show 1 item on very small mobile
          slidesToScroll: 1,
          initialSlide: 0, // Start from the first slide
        },
      },
    ],
  };

  // Example items (replace with your actual portfolio items)
  const portfolioItems = [
    {
      id: 1,
      content: (
        <iframe
          src="https://open.spotify.com/embed/album/5rwN8aLEDpZ5rJ4UX4MqgK?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          id="1"
        ></iframe>
      ),
    },
    {
      id: 2,
      content: (
        <iframe
          src="https://open.spotify.com/embed/album/17mApYmMgv5PjYcDK6M2eR?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          id="2"
        ></iframe>
      ),
    },
    {
      id: 3,
      content: (
        <iframe
          src="https://open.spotify.com/embed/album/6QLzEVHC0iUUmlhhZcp3MT?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          id="3"
        ></iframe>
      ),
    },
    {
      id: 4,
      content: (
        <iframe
          src="https://open.spotify.com/embed/album/2xjSjFiPL5UXpl3dPTfKXm?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          id="4"
        ></iframe>
      ),
    },
    {
      id: 5,
      content: (
        <iframe
          src="https://open.spotify.com/embed/album/0VzvpwXcWi3BdCNyb0mLOk?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          id="5"
        ></iframe>
      ),
    },
    {
      id: 6,
      content: (
        <iframe
          src="https://open.spotify.com/embed/album/5r0kABBH3n1l6yNZp5gHkK?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          id="6"
        ></iframe>
      ),
    },
    {
      id: 7,
      content: (
        <iframe
          src="https://open.spotify.com/embed/album/7LW4FQsktGfF1OaEVfjl0n?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          id="7"
        ></iframe>
      ),
    },
    {
      id: 8,
      content: (
        <iframe
          src="https://open.spotify.com/embed/album/3t4iIY3mlNiWGBCLcsskcM?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          id="8"
        ></iframe>
      ),
    },
    {
      id: 9,
      content: (
        <iframe
          src="https://open.spotify.com/embed/album/0GXZT6lMFx4JWX2ndjf1R3?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          id="9"
        ></iframe>
      ),
    },
  ];
  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container-wide " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              My Releases
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              Releases
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          <div
            className="portfolio"
            //onMouseEnter={() => setAutoplayActive(false)} // Stop Scroll
            //onMouseLeave={() => setAutoplayActive(true)} // Resume Scroll
          >
            <div className="row">
              <div className="col-lg-12">
                {/* Only render the Slider if there are items */}
                {portfolioItems.length > 0 && (
                  <Slider {...settings} ref={sliderRef}>
                    {portfolioItems.map((item) => (
                      <div
                        key={item.id}
                        className="portfolio-item"
                        //onClick={handleItemInteraction}
                        onMouseEnter={handleItemInteraction}
                        onMouseLeave={() => setAutoplayActive(true)}
                      >
                        <h3>{item.content}</h3>
                        {/* Your actual portfolio content goes here */}
                      </div>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
