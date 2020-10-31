import React from "react";
import "./styles/Button.css";

const Button = ({ title, url, target = "_self" }) => {
  return (
    <div className="portfoly_btn">
      <a href={url} target={target}>
        <span>{title}</span>
      </a>
    </div>
  );
};

export default Button;
