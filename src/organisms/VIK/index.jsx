import React from "react";
import VIKArticleGrid from "../../molecules/VIKArticleGrid/index";
import "./index.css";

const VIK = ({ VIKArticles }) => {
  return (
    <div className="row col-offset-fluid ga--vik-gate">
      <div className="col-bs10-10">
        <div className="title">
          <a href="http://vik.kompas.com" target="_blank">
            <img
              src="https://asset.kompas.com/data/2017/wp/images/logo-vik.png"
              alt="vik"
            />
          </a>
        </div>
        <div className="article__wrap__grid--vik mt2 col-offset-fluid">
          {VIKArticles.map((article) => (
            <VIKArticleGrid
              id={article.id}
              href={article.href}
              title={article.title}
              desc={article.desc}
              src={article.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default VIK;
