import React from "react";

const Disclaimer = ({ darkTheme }) => {
  return (
    <div
      id="disclaimer"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className="modal-header">
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Impressum
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p>
              Angaben gemäss §5 Telemediengesetz
            </p>
            <ul className="lh-lg">
              <li>
                Kevin Schenk
              </li>
              <li>
                Franz-Schuber-str. 6
              </li>
              <li>
                01809 Heidenau
              </li>
              <li>
                Tel: 015202718523
              </li>
              <li>
                E-mail: Thinnurusc.Graustein@gmail.com
              </li>
              <li>
                Vertreten durch:
              </li>
              <li>
                Position1Tracks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
