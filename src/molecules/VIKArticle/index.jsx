import React from "react";
import VIKArticleAsset from "../../atoms/VIKArticleAsset/index";
import VIKArticleLead from "../../atoms/VIKArticleLead/index";
import VIKArticleTitle from "../../atoms/VIKArticleTitle/index";
import "./index.css";

const VIKArticle = ({
  key,
  hrefAsset,
  srcAsset,
  altAsset,
  linkArtTitle,
  artTitle,
  descArtLead,
}) => {
  return (
    <div className="col-bs12-3">
      <div className="article__grid" key={key}>
        <VIKArticleAsset href={hrefAsset} src={srcAsset} alt={altAsset} />
        <div className="article__box">
          <VIKArticleTitle link={linkArtTitle} title={artTitle} />
          <VIKArticleLead desc={descArtLead} />
        </div>
      </div>
    </div>
  );
};

export default VIKArticle;
