import React from "react";
import "./ConsentModal.css";

const ConsentModal = ({ onAccept }) => {
  return (
    <div className="consent-modal-overlay">
      <div className="consent-modal-content">
        <h2>Willkommen auf meiner Webseite</h2>
        <p>
          Auf meiner Webseite nutzte ich Google, Meta und Spotify einbindungen,
          wenn sie fortfahren erklären sie sich damit einverstanden dass ihre IP
          Adresse an diese Unternehmen weitergeleitet werden. Hier ist unsere
          <a href="#terms-policy" target="_blank" rel="noopener noreferrer">
            Datenschutz
          </a>
          -Erklärung für mehr Information.
        </p>
        <button className="consent-button" onClick={onAccept}>
          Ich bin Einverstanden
        </button>
      </div>
    </div>
  );
};

export default ConsentModal;
