import React from "react";
import "./index.css";

const VIKArticleBoxTitle = ({ href, text }) => {
  return (
    <h4 className="article__title">
      <a href={href} className="article__link">
        {text}
      </a>
    </h4>
  );
};
export default VIKArticleBoxTitle;
