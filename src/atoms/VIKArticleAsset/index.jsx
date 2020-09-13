import React from "react";
import "./index.css";

const VIKArticleAsset = ({ href, src, title }) => {
  return (
    <div className="article__asset">
      <a href={href}>
        <img src={src} alt={title} />
      </a>
    </div>
  );
};
export default VIKArticleAsset;
