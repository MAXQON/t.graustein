// src/components/Portfolio.js
import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout"; // Keep if you use it elsewhere
import ProjectDetailsModal from "./ProjectDetailsModal"; // Keep if used
// import Iframe from "react-iframe"; // You might not need this anymore if SpotifyEmbed handles iframes
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpotifyEmbed from "./SpotifyEmbed"; // <--- IMPORT THE NEW COMPONENT

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
        // Assuming your API returns real Spotify embed URLs or IDs you can convert
        // For demonstration, we'll stick to the hardcoded `portfolioItems` below
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

  // Handler for when an item is interacted with (mouse enter or touch start)
  const handleItemInteraction = () => {
    setAutoplayActive(false);
  };

  // Handler for when interaction ends (mouse leave or touch end)
  const handleInteractionEnd = () => {
    setAutoplayActive(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: autoplayActive,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToScroll: 1,
    pauseOnHover: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 0 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 0 },
      },
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 0 },
      },
    ],
  };

  // Your original portfolioItems array, but now storing just the SRC
  // The actual iframe will be rendered by the SpotifyEmbed component
  const portfolioItems = [
    {
      id: 1,
      src: "https://open.spotify.com/embed/album/5rwN8aLEDpZ5rJ4UX4MqgK?utm_source=generator", // Your original src
      title: "My Awesome Release 1", // Add meaningful titles
    },
    {
      id: 2,
      src: "https://open.spotify.com/embed/album/17mApYmMgv5PjYcDK6M2eR?utm_source=generator", // Your original src
      title: "My Latest Single",
    },
    {
      id: 3,
      src: "https://open.spotify.com/embed/album/6QLzEVHC0iUUmlhhZcp3MT?utm_source=generator", // Your original src
      title: "Album XYZ",
    },
    {
      id: 4,
      src: "https://open.spotify.com/embed/album/2xjSjFiPL5UXpl3dPTfKXm?utm_source=generator",
      title: "Another Great Track",
    },
    {
      id: 5,
      src: "https://open.spotify.com/embed/album/0VzvpwXcWi3BdCNyb0mLOk?utm_source=generator",
      title: "Collaborative Project",
    },
    {
      id: 6,
      src: "https://open.spotify.com/embed/album/5r0kABBH3n1l6yNZp5gHkK?utm_source=generator",
      title: "Live Performance",
    },
    {
      id: 7,
      src: "https://open.spotify.com/embed/album/7LW4FQsktGfF1OaEVfjl0n?utm_source=generator",
      title: "Remix Series",
    },
    {
      id: 8,
      src: "https://open.spotify.com/embed/album/3t4iIY3mlNiWGBCLcsskcM?utm_source=generator",
      title: "Experimental Sound",
    },
    {
      id: 9,
      src: "https://open.spotify.com/embed/album/0GXZT6lMFx4JWX2ndjf1R3?utm_source=generator",
      title: "Chill Vibes Playlist",
    },
  ];

  // If you want to use the fetched releases, you would map them here:
  // const dynamicPortfolioItems = releases.map(release => ({
  //   id: release.id,
  //   src: `https://open.spotify.com/embed/track/${release.id}?utm_source=generator`, // Assuming API gives track ID
  //   title: release.name // Use the release name as title
  // }));

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
            onMouseEnter={handleItemInteraction}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleItemInteraction}
            onTouchEnd={handleInteractionEnd}
            onTouchCancel={handleInteractionEnd}
          >
            <div className="row">
              <div className="col-lg-12">
                {/* Render the Slider with SpotifyEmbed components */}
                {portfolioItems.length > 0 && (
                  <Slider {...settings} ref={sliderRef}>
                    {/* Map through portfolioItems and render SpotifyEmbed for each */}
                    {portfolioItems.map((item) => (
                      <div
                        key={item.id}
                        className="portfolio-item"
                        // These handlers are now less critical on the individual item
                        // because the parent 'portfolio' div captures general interaction
                        // onMouseEnter={handleItemInteraction}
                        // onMouseLeave={handleInteractionEnd}
                        // onTouchStart={handleItemInteraction}
                        // onTouchEnd={handleInteractionEnd}
                        // onTouchCancel={handleInteractionEnd}
                      >
                        {/* Use the new SpotifyEmbed component */}
                        <SpotifyEmbed
                          id={item.id}
                          src={item.src}
                          title={item.title}
                        />
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
