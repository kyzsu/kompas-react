import React from "react";
import "./index.css";

const TopikPilihanArticleItem = ({ href, text }) => {
  return (
    <div className="article__list__item">
      <h4 className="article__title article__title--bullet">
        <a href={href} className="article__link">
          {text}
        </a>
      </h4>
    </div>
  );
};
export default TopikPilihanArticleItem;
