import React from "react";
import "./index.css";

const VIKArticleAsset = ({ href, src, alt }) => {
  return (
    <div className="article__asset">
      <a href={href}>
        <img src={src} alt={alt} />
      </a>
    </div>
  );
};

export default VIKArticleAsset;
