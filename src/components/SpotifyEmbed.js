// src/components/SpotifyEmbed.js
import React, { useRef, useState, useEffect } from "react";

const SpotifyEmbed = ({ id, src, title }) => {
  const iframeRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  // Set the perfect border-radius value
  const borderRadiusValue = "14px"; // <--- UPDATED TO 14px

  useEffect(() => {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !inView) {
            setInView(true);
          }
        },
        {
          rootMargin: "100px 0px",
          threshold: 0.01,
        }
      );

      if (iframeRef.current) {
        observer.observe(iframeRef.current);
      }

      return () => {
        if (iframeRef.current) {
          observer.unobserve(iframeRef.current);
        }
      };
    } else {
      setInView(true);
    }
  }, [inView]);

  const handleIframeLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "352px",
        backgroundColor: "#191414", // Spotify's dark background color - good for placeholder
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // Crucial for clipping content within this div
        borderRadius: borderRadiusValue, // Apply border-radius to the container
      }}
    >
      {/* Placeholder content - shown until iframe is loaded */}
      {!loaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#b3b3b3", // Light gray text
            fontSize: "1rem",
            textAlign: "center",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginBottom: "10px",
              animation: "spin 1s linear infinite",
            }}
          >
            {/* Simple Spotify icon or spinner SVG */}
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              fill="currentColor"
              opacity="0.2"
            />
            <path
              d="M22 12C22 17.5228 17.5228 22 12 22V2C17.5228 2 22 6.47715 22 12Z"
              fill="currentColor"
            />
          </svg>
          Loading Spotify embed...
        </div>
      )}

      {/* Actual iframe */}
      <iframe
        ref={iframeRef}
        src={inView ? src : ""}
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={title || `Spotify Embed ${id}`}
        onLoad={handleIframeLoad}
        style={{
          border: "none",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: borderRadiusValue, // Apply border-radius to the iframe
        }}
      ></iframe>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SpotifyEmbed;
