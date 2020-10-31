import React from "react";
import { TiHtml5 } from "react-icons/ti";
import {
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiJqueryLogo,
  DiReact,
  DiPython,
} from "react-icons/di";
import { SiRedux, SiPhp, SiMysql } from "react-icons/si";
import { Progress } from "antd";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <h1>Technical skills</h1>
        <h2 className="mb-5">Front End</h2>
        <div className="row frontEnd">
          <div className="col-lg-3">
            <div className="skill_item">
              <div className="img">
                <TiHtml5 className="img" />
              </div>
              {/* <Progress
                percent={95}
                status="active"
                trailColor="#ccc"
                strokeColor="#000"
              /> */}
              <h3>HTML 5</h3>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="skill_item">
              <div className="img">
                <DiCss3 className="img" />
              </div>

              <h3>CSS 3</h3>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="skill_item">
              <div className="img">
                <DiBootstrap className="img" />
              </div>

              <h3>Bootstrap 4</h3>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="skill_item">
              <div className="img">
                <DiJavascript1 className="img" />
              </div>

              <h3>JavaScript</h3>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="skill_item">
              <div className="img">
                <DiJqueryLogo className="img" />
              </div>

              <h3>jQueryY</h3>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="skill_item">
              <div className="img">
                <DiReact className="img" />
              </div>

              <h3>React JS</h3>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="skill_item">
              <div className="img">
                <SiRedux className="img" />
              </div>

              <h3>Redux</h3>
            </div>
          </div>
        </div>

        <h2 className="mb-5">Back End</h2>
        <div className="row beckEnd">
          <div className="col-lg-3">
            <div className="skill_item">
              <div className="img">
                <SiPhp className="img" />
              </div>

              <h3>PHP</h3>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="skill_item">
              <div className="img">
                <SiMysql className="img" />
              </div>

              <h3>
                My<span>SQL</span>
              </h3>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="skill_item">
              <div className="img">
                <img src="./images/yii.png" alt="yii_logo" />
              </div>

              <h3>
                Yii<span>Framework</span> 2
              </h3>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="skill_item">
              <div className="img">
                <DiPython className="img" />
              </div>

              <h3>Python</h3>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
