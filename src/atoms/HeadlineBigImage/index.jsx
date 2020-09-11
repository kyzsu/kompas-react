import React from "react";
import "./index.css";

const HeadlineBigImg = ({ image, alt }) => {
  return (
    <div className="Headline-Big-Img">
      <img
        src={
          image
            ? image
            : "https://asset.kompas.com/crops/oiumMcTmckL2HLD08JCbVChZMcQ=/200x388:1800x1454/740x500/data/photo/2020/03/20/5e740f31f2354.jpg"
        }
        alt={alt}
      />
    </div>
  );
};

export default HeadlineBigImg;
