import React from "react";
import { dataHeader } from "../../services/Data";
import Button from "../Button";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left">
              <h1>
                Hello <br /> I'm {dataHeader.fullName}
              </h1>
              <p>{dataHeader.subTitle}</p>
              <Button title="Portfoly" url="#work" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right">
              <img
                src={`./images/${dataHeader.img}`}
                alt="full-stack-development-main"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
