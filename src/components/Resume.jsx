import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2000 - 2004",
      title: "Computer Science",
      place: "International University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2012 - 2013",
      title: "Jr. UI UX Designer",
      place: "Themeforest",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];

  const skills = [
    {
      name: "Web Design",
      percent: 65,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Streaming
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Streaming
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="position-relative text-center">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Spalte Mittig
            </h2>
            <div className="text-center mt-5">
              <a>
                Hier Folgt in kürze der Blockinhalt für die Streaming Section.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
