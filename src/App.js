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
import PreLoader from "./components/Preloader"; // Keep PreLoader for initial site load
import { Tooltip } from "./components/Tooltip";

function App() {
  // State for Consent Modal
  const [hasAcceptedConsent, setHasAcceptedConsent] = useState(false);

  // State for your existing loading functionality
  const [isLoading, setIsLoading] = useState(true);

  // State for Scroll-to-Top functionality
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  // Destructure commonConfig values (available after main content loads)
  // These will be undefined until commonConfig.js is actually processed and exports them.
  // It's fine to keep them here, but be aware of their initial state.
  const classicHeader = commonConfig.classicHeader;
  const darkTheme = commonConfig.darkTheme;

  // --- Utility functions for cookie handling ---

  /**
   * Sets the 'hasAcceptedConsent' cookie with an expiration date.
   * @param {number} days The number of days until the cookie expires.
   */
  const setConsentCookie = (days) => {
    const date = new Date();
    // Calculate expiration: current time + days * 24h * 60m * 60s * 1000ms
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();

    // Set the cookie.
    // 'path=/' makes it available across the entire site.
    // 'SameSite=Lax' helps prevent CSRF attacks.
    // 'Secure' ensures the cookie is only sent over HTTPS (CRUCIAL for production).
    document.cookie = `hasAcceptedConsent=true;${expires};path=/;SameSite=Lax;Secure`;
    console.log("Consent cookie set:", document.cookie);
  };

  /**
   * Checks if the 'hasAcceptedConsent' cookie exists and is true.
   * Browsers automatically remove expired cookies, so simply checking for its presence
   * is enough to determine if consent is currently valid.
   * @returns {boolean} True if consent cookie is found and true, false otherwise.
   */
  const checkConsentCookie = () => {
    const name = "hasAcceptedConsent=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";"); // Split by semicolons

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      // Trim whitespace from the start of the cookie string
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      // If this cookie string begins with the name we want, check its value
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length) === "true";
      }
    }
    return false; // Cookie not found or not 'true'
  };

  // --- Consent Logic (Runs first) ---
  useEffect(() => {
    // Check if the cookie exists and is valid
    const consentGiven = checkConsentCookie();

    if (consentGiven) {
      setHasAcceptedConsent(true);
      // If consent is already given via cookie, proceed with normal site loading
      // The PreLoader (if used) will run its course or be skipped
      // depending on how you've set up isLoading initially.
      // Assuming PreLoader is shown only if isLoading is true,
      // you might want to set isLoading(false) here after a short delay
      // if you want the site to load faster for returning users.
      // For now, we'll keep the existing isLoading logic which relies on a timeout.
      const initialLoadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Keep initial 1-second delay for site content to load
      return () => clearTimeout(initialLoadingTimeout);
    } else {
      // If consent is NOT given (cookie expired or not present),
      // show the modal and ensure main content is not loaded yet.
      setHasAcceptedConsent(false); // Ensure this is false
      setIsLoading(true); // Keep loading state true until consent is given
    }
  }, []); // Only runs once on initial App component mount

  const handleAcceptConsent = () => {
    setHasAcceptedConsent(true); // Set state to true
    setConsentCookie(7); // Set the cookie for 7 days

    // Once consent is accepted, start the "main content loading" timer
    // This provides a short delay for the transition from modal to site
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1-second delay after consent for "site loading" animation
    return () => {
      // Cleanup for the timeout if component unmounts early (unlikely for App)
      clearTimeout(loadingTimeout);
    };
  };

  // --- Scroll-to-Top Logic (Only active when main content is loaded) ---
  useEffect(() => {
    if (hasAcceptedConsent && !isLoading) {
      const checkScrollTop = () => {
        let scrollTopBtn = document.getElementById("back-to-top");
        if (scrollTopBtn) {
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

      window.addEventListener("scroll", checkScrollTop);
      return () => {
        window.removeEventListener("scroll", checkScrollTop);
      };
    }
  }, [hasAcceptedConsent, isLoading]);

  // --- Navigation Click Handler (Available to children of MainContent) ---
  const handleNavClick = (section) => {
    if (document.getElementById(section)) {
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- Conditional Rendering ---
  // If consent hasn't been accepted (based on cookie check), show only the modal.
  if (!hasAcceptedConsent) {
    return (
      <div className="App">
        <ConsentModal onAccept={handleAcceptConsent} />
      </div>
    );
  }

  // If consent has been accepted, show either the preloader or the main content.
  return (
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

      {/* Your existing PreLoader logic */}
      {isLoading && <PreLoader />}
    </>
  );
}

export default App;
