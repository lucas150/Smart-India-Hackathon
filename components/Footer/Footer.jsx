import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ex
            eius amet quaerat commodi natus laboriosam, repellat omnis
            voluptatum quo quod deserunt eos, est nisi consectetur. Nesciunt,
            natus! Magni, non!
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Andheri(W) Mumbai, 400058</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 99999999**</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">EmailId: hellonishantchamate@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
            <span className="text">Coal</span>
            <span className="text">Coal</span>
            <span className="text">Coal</span>
            <span className="text">Coal</span>
            <span className="text">Coal</span>
            <span className="text">Coal</span>
        </div>
        <div className="col">
        <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms & Conditions</span>
            <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                TALA 2023 Created by Nishant Chamate. PREMIUM Coal SOLUTION.
            </div>
            <img src={Payment} />
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
