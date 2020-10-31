import React from "react";
import { dataAbout } from "../../services/Data";
const About = () => {
  return (
    <div className="container" id="about">
      <div className="about" style={{ padding: "100px 0" }}>
        <h1
          style={{
            fontSize: "70px",
            marginBottom: "35px",
            fontWeight: "900",
          }}
        >
          About
        </h1>
        <p
          style={{
            fontFamily: "Montserrat",
            fontSize: "15px",
            lineHeight: "2",
          }}
        >
          {dataAbout.vs}
        </p>
      </div>
    </div>
  );
};

export default About;
