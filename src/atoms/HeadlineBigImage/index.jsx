import React from "react";
import "./index.css";

const HeadlineBigImg = ({ image, alt }) => {
  return (
    <div className="Headline-Big-Img">
      <img
        src={
          image
            ? image
            : "https://asset.kompas.com/crops/j3cAnqlEHukYktDWI5pscL-O9NA=/88x113:764x563/740x500/data/photo/2020/05/17/5ec118053541c.jpg"
        }
        alt={alt}
      />
    </div>
  );
};

export default HeadlineBigImg;
