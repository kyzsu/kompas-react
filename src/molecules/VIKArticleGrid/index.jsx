import React from "react";
import VIKArticleAsset from "../../atoms/VIKArticleAsset/index";
import VIKArticleBoxTitle from "../../atoms/VIKArticleBoxTitle/index";
import VIKArticleBoxLead from "../../atoms/VIKArticleBoxLead/index";
import "./index.css";

const VIKArticleGrid = ({ id, href, title, desc, src }) => {
  return (
    <div className="col-bs12-3" key={id}>
      <div className="article__grid">
        <VIKArticleAsset href={href} src={src} title={title} />
        <div className="article__box">
          <VIKArticleBoxTitle href={href} text={title} />
          <VIKArticleBoxLead desc={desc} />
        </div>
      </div>
    </div>
  );
};
export default VIKArticleGrid;
