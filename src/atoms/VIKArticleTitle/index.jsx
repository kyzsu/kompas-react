import React from "react";
import "./index.css";

const VIKArticleTitle = ({ link, title }) => {
  return (
    <h4 className="article__title">
      <a href={link} className="article__link">
        {title}
      </a>
    </h4>
  );
};

export default VIKArticleTitle;
