import React from "react";
import Button from "../Button";
import { dataWork } from "../../services/Data";
import "../styles/Works.css";

const Works = () => {
  return (
    <div className="work" id="work">
      <div className="container">
        <h1>Works</h1>
        <div className=" row">
          {dataWork.map((data, index) => (
            <div className="col-lg-4" key={index}>
              <div className="work_item">
                <div className="img">
                  <img src={`./images/${data.img}`} alt={`${data.info}`} />
                </div>
                <p>{data.info}</p>
                <Button title="View project" url={data.url} target="_blank" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
