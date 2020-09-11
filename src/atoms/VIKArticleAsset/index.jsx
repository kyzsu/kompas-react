import React from "react";
import "./index.css";

const VIKArticleAsset = ({ href, src, alt }) => {
  return (
    <a href={href}>
      <img src={src} alt={alt} />
    </a>
  );
};

export default VIKArticleAsset;
