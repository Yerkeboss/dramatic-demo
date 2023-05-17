import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">
            Navigation
            <ul className="subMenuItems">
              <li className="subMenuItem">Home</li>
              <li className="subMenuItem">FAQ</li>
              <li className="subMenuItem">Investor Relations</li>
              <li className="subMenuItem">Jobs</li>
              <li className="subMenuItem">Help Centre</li>
            </ul>
          </li>
          <li className="menuItem">
            LEGAL
            <ul className="subMenuItems">
              <li className="subMenuItem">Privacy Policy</li>
              <li className="subMenuItem">Terms of Service</li>
              <li className="subMenuItem">Cookie Preferences</li>
              <li className="subMenuItem">Corporate Information</li>
            </ul>
          </li>
          <li className="menuItem">
            TALK TO US
            <ul className="subMenuItems">
              <li className="subMenuItem">support@ercom.com</li>
              <li className="subMenuItem">+66 2399 1145</li>
            </ul>
          </li>
          <li className="menuItem">
            Follow us
            <ul className="subMenuItems">
              <div className="socialIcons">
                <span className="icon">
                  <FaFacebookF />
                </span>
                <span className="icon">
                  <FaLinkedin />
                </span>
                <span className="icon">
                  <FaTwitter />
                </span>
              </div>
            </ul>
          </li>
        </ul>
        <div className="infoText">
          © 2022 Dramatic. All Rights Reserved.
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
