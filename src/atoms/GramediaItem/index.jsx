import React from "react";
import "./index.css";

const GramediaItem = ({ key, hrefBuy, textBuy, src, alt }) => {
  return (
    <li className="gramedia__item slick-slide" key={key}>
      <h4 className="gramedia__asset">
        <img src={src} alt={alt} />
      </h4>
      <a href={hrefBuy} className="gramedia__buy">
        {textBuy}
      </a>
    </li>
  );
};
export default GramediaItem;
