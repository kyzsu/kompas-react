import React from "react";
import "./index.css";

const FooterSocial = () => {
  return (
    <div className="footer__social">
      <div className="social social--footer">
        <link href="https://www.kompas.com" />
        <div className="social__item">
          <a
            href="https://www.facebook.com/kompascom"
            className="social__link social__link--facebook"
          ></a>
        </div>
        <div className="social__item">
          <a
            href="https://www.twitter.com/kompascom"
            className="social__link social__link--twitter"
          ></a>
        </div>
        <div className="social__item">
          <a
            href="https://www.instagram.com/kompascom"
            className="social__link social__link--instagram"
          ></a>
        </div>
        <div className="social__item">
          <a
            href="https://www.line.me/ti/p/%40kompas.com"
            className="social__link social__link--line"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;
