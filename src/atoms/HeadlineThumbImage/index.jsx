import React from "react";
import "./index.css";

const HeadlineThumbImg = ({ image, alt }) => {
  return (
    <div className="Headline-Thumb-Img">
      <img
        src={
          image
            ? image
            : "https://asset.kompas.com/crops/4M4g5x7iacN2J4Xq4xp7H0uVAOw=/0x0:0x0/185x124/data/photo/2020/09/10/5f59a57a4a3b5.jpg"
        }
        alt={
          alt
            ? alt
            : "Jenazah Jakob Oetama Diserahkan ke Negara untuk Dimakamkan Secara Militer"
        }
      />
    </div>
  );
};
