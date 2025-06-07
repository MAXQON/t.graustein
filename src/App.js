import "./App.scss";
import ConsentModal from "./components/ConsentModal";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ClassicHeader from "./components/ClassicHeader";
import { commonConfig } from "./config/commonConfig";
import TermsAndConditions from "./components/TermsAndConditions";
import Disclaimer from "./components/Disclaimer";
import PreLoader from "./components/Preloader";
import { Tooltip } from "./components/Tooltip";

function App() {
  // State for Consent Modal
  const [hasAcceptedConsent, setHasAcceptedConsent] = useState(false);

  // State for your existing loading functionality
  const [isLoading, setIsLoading] = useState(true); // Renamed from setisLoading for consistency

  // State for Scroll-to-Top functionality
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  // Destructure commonConfig values (available after main content loads)
  const classicHeader = commonConfig.classicHeader; // Will be undefined until commonConfig loads
  const darkTheme = commonConfig.darkTheme; // Will be undefined until commonConfig loads

  // --- Consent Logic (Runs first) ---
  useEffect(() => {
    const consentGiven = localStorage.getItem("site_consent_agreed");
    if (consentGiven === "true") {
      setHasAcceptedConsent(true);
      // If consent is already given, we can start the main content loading logic
      // immediately after the browser confirms it's ready.
      // No need for a manual isLoading timeout if consent is already true,
      // as the main site content will load directly.
    } else {
      // If consent is NOT given, we initially mark isLoading as true
      // and won't set it to false until after consent is accepted.
      setIsLoading(true);
    }
  }, []); // Only runs once on initial App component mount

  const handleAcceptConsent = () => {
    setHasAcceptedConsent(true);
    localStorage.setItem("site_consent_agreed", "true");
    // Once consent is accepted, start the "main content loading" timer
    // This provides a short delay for the transition from modal to site
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1-second delay after consent for "site loading" animation (if you have one)
    return () => {
      // Cleanup for the timeout if component unmounts early (unlikely for App)
      clearTimeout(loadingTimeout);
    };
  };

  // --- Scroll-to-Top Logic (Only active when main content is loaded) ---
  useEffect(() => {
    // This useEffect will only run when hasAcceptedConsent changes to true
    // AND when isLoading changes to false, meaning the site content is visible.
    if (hasAcceptedConsent && !isLoading) {
      const checkScrollTop = () => {
        let scrollTopBtn = document.getElementById("back-to-top");
        if (scrollTopBtn) {
          // Check if the button element exists
          if (
            document.body.scrollTop > 400 ||
            document.documentElement.scrollTop > 400
          ) {
            setScrollTopVisible(true);
          } else {
            setScrollTopVisible(false);
          }
        }
      };

      // Add event listener only when main content is loaded
      window.addEventListener("scroll", checkScrollTop);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", checkScrollTop);
      };
    }
  }, [hasAcceptedConsent, isLoading]); // Re-run effect if these states change

  // --- Navigation Click Handler (Available to children of MainContent) ---
  const handleNavClick = (section) => {
    if (document.getElementById(section)) {
      // Ensure the element exists before trying to scroll
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- Conditional Rendering ---
  if (!hasAcceptedConsent) {
    return (
      <div className="App">
        <ConsentModal onAccept={handleAcceptConsent} />
      </div>
    );
  }

  return (
    <div className="App">
      {isLoading ? (
        // You can render a simple loading screen here
        <div className="site-loading-screen">
          <p>Loading site...</p>
          {/* Add a spinner or animation if you like */}
        </div>
      ) : (
        <>
          <div
            style={{ position: "relative" }}
            className={classicHeader ? "" : "side-header"}
          >
            <div id="main-wrapper">
              {classicHeader ? (
                <ClassicHeader handleNavClick={handleNavClick}></ClassicHeader>
              ) : (
                <Header handleNavClick={handleNavClick}></Header>
              )}

              <div id="content" role="main">
                <Home
                  classicHeader={classicHeader}
                  darkTheme={darkTheme}
                  handleNavClick={handleNavClick}
                ></Home>
                <AboutUs
                  classicHeader={classicHeader}
                  darkTheme={darkTheme}
                ></AboutUs>
                <Services
                  classicHeader={classicHeader}
                  darkTheme={darkTheme}
                ></Services>
                <Resume
                  classicHeader={classicHeader}
                  darkTheme={darkTheme}
                ></Resume>
                <Portfolio
                  classicHeader={classicHeader}
                  darkTheme={darkTheme}
                ></Portfolio>
                <Testimonials
                  classicHeader={classicHeader}
                  darkTheme={darkTheme}
                ></Testimonials>
                <Contact
                  classicHeader={classicHeader}
                  darkTheme={darkTheme}
                ></Contact>
              </div>
              <Footer
                classicHeader={classicHeader}
                darkTheme={darkTheme}
                handleNavClick={handleNavClick}
              ></Footer>
            </div>
            {/* back to top */}
            <Tooltip text="Back to Top" placement="left">
              <span
                id="back-to-top"
                className="rounded-circle"
                style={{ display: scrollTopVisible ? "inline" : "none" }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <i className="fa fa-chevron-up"></i>
              </span>
            </Tooltip>

            <TermsAndConditions darkTheme={darkTheme}></TermsAndConditions>
            <Disclaimer darkTheme={darkTheme}></Disclaimer>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
