import React from "react";
import TopikPilihanArticleItem from "../../atoms/TopikPilihanArticleItem";
import "./index.css";

const TopikPilihanArticleGrid = ({ TPArticleItems }) => {
  return (
    <div className="article__grid">
      <div className="article__asset">
        <div className="article__box article__box--offset-0">
          {TPArticleItems.map((articles) => (
            <TopikPilihanArticleItem
              href={articles.href}
              text={articles.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TopikPilihanArticleGrid;
