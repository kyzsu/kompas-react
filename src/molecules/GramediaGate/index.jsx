import React from "react";
import GramediaItem from "../../atoms/GramediaItem/index";
import GramediaTitle from "../../atoms/GramediaTitle/index";
import "./index.css";

const GramediaGate = ({ GramediaItems }) => {
  return (
    <div className="gramedia__gate">
      <GramediaTitle />
      <ul className="gramedia__wrap">
        {GramediaItems.map((item) => (
          <GramediaItem
            key={item.id}
            hrefBuy={item.href}
            textBuy={item.text}
            src={item.src}
            alt={item.alt}
          />
        ))}
      </ul>
    </div>
  );
};
export default GramediaGate;
