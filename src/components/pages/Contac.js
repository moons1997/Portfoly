import React from "react";
import { FaPhone, FaTelegram } from "react-icons/fa";
import { ImGooglePlus3 } from "react-icons/im";
import "../styles/Contact.css";

const Contac = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h1>Contacts</h1>

        <p className="mb-2">
          <a href="tel:+998902251997">
            <span>
              <FaPhone />
            </span>
            +998902251997
          </a>
        </p>

        <p className="mb-2">
          <a href=" https://t.me/@user_web">
            <span>
              <FaTelegram />
            </span>
            +998996770899
          </a>
        </p>

        <p className="mb-2">
          <a href="mailto: umar1997mengliyev@gmail.com">
            <span>
              <ImGooglePlus3 />
            </span>
            umar1997mengliyev@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contac;
