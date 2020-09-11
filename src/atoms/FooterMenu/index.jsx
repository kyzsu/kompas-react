import React from "react";
import "./index.css";

const FooterMenu = () => {
  return (
    <div className="footer__menu">
      <div className="footer__menu__item footer__menu__item--inline">
        <a
          href="https://www.kompas.com/topik-pilihan/list/3361/kabar.palmerah"
          className="footer__menu__link"
        >
          Kabar Palmerah
        </a>
      </div>
      <div className="footer__menu__item footer__menu__item--inline">
        <a
          href="https://inside.kompas.com/about-us"
          className="footer__menu__link"
        >
          About Us
        </a>
      </div>
      <div className="footer__menu__item footer__menu__item--inline">
        <a href="http://www.meetkcm.com/" className="footer__menu__link">
          Advertise
        </a>
      </div>
      <div className="footer__menu__item footer__menu__item--inline">
        <a
          href="https://inside.kompas.com/policy"
          className="footer__menu__link"
        >
          Policy
        </a>
      </div>
      <div className="footer__menu__item footer__menu__item--inline">
        <a
          href="https://inside.kompas.com/pedoman"
          className="footer__menu__link"
        >
          Pedoman Media Siber
        </a>
      </div>
      <div className="footer__menu__item footer__menu__item--inline">
        <a href="#" className="footer__menu__link">
          Career
        </a>
      </div>
      <div className="footer__menu__item footer__menu__item--inline">
        <a href="#" className="footer__menu__link">
          Contact Us
        </a>
      </div>
    </div>
  );
};
export default FooterMenu;
