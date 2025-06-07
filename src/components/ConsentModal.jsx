import React from "react";
import "./ConsentModal.css";

const ConsentModal = ({ onAccept }) => {
  return (
    <div className="consent-modal-overlay">
      <div className="consent-modal-content">
        <h2>Willkommen auf meiner Webseite</h2>
        <p>
          By continuing to browse this site, you agree to the use of cookies and
          the collection of anonymous data to enhance your experience. Please
          read our{" "}
          <a href="#terms-policy" target="_blank" rel="noopener noreferrer">
            Datenschutz
          </a>{" "}
          für mehr Information.
        </p>
        <button className="consent-button" onClick={onAccept}>
          Ich bin Einverstanden
        </button>
      </div>
    </div>
  );
};

export default ConsentModal;
