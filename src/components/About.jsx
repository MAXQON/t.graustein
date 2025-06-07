import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Über Mich
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              Kevin Schenk alias{" "}
              <span className="text-primary">T.Graustein,</span> steckte schon
              immer mit dem Kopf in vergangenen Jahrzehnten, welche vor den 2000
              Jahren lagen.
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              Ein Freund von ihm sagte einst: „Seine Heimat trägt Kevin im
              Herzen, doch seine Wunschrealität liegt zwanzig Jahre zurück.“ Er
              meinte in diesem Fall die achtziger Jahre. Doch bevor Kevin seine
              Passion zur Synthwave Musik als Künstler fand. Musste viel Zeit
              vergehen, sein Werdegang als Sicherheitsdienst und Streamer hatte
              Vorrang. Vor allem sein Job als Sicherheitsdienst ist ihm sehr
              wichtig. Als Rockmax vom Label Position1Tracks in das Leben von
              Kevin trat, änderten sich jedoch von Zeit zu Zeit die Vorlieben
              von Kevin und seine Liebe zum Gaming rückte in den Hintergrund.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              Doch sein Name blieb bestehen. Denn Kevin alias T.Graustein war
              einst als Thinnurusc Graustein auf Twitch bekannt. Thinnurusc
              Graustein ist ein alter Ego und eine alte Rollenspielfigur
              vergangener Zeiten, welche ihren Vornamen den Büchern von J. R. R.
              Tolkien verdankt. Denn Thinnurusc bedeutet in der Sprache Quenya
              frei übersetzt wortwörtlich Zwielichtfuchs, was als Synonym für
              Graufuchs stand.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              In einer Zusammenarbeit mit Rockmax entstanden dann im Jahr 2023
              die ersten zwei Singles & das Album von Kevin ganz im Stil des
              achtziger Jahre Synthwave. Kevin wagte sich sogar an ein Cover von
              Hold on to the Vision, welches in einer zusammenarbeit mit MarcAnt
              entstanden ist. Seit dieser Zeit entwickelte sich nicht nur Kevin
              weiter, sondern auch seine Freundschaft zu Tom Kenzler alias
              Rockmax.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Kevin Schenk
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:chat@simone.com">
                    Thinnurusc.Graustein@gmail.com
                  </a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>32
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Sachsen, Deutschland
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Optionaler Download
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>20</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Songs
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>20</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Releases
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>8</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Singles/EP's
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>1</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Alben
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>1.865</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  TikTok Follower
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>50</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Spotify Monatliche Hörer
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>2</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Wochen im Radio
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>1</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Gespielte Songs im Radio
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
