import React from "react";
import VIKArticle from "../../molecules/VIKArticle/index";
import VIKTitle from "../../atoms/VIKTitle/index";
import "./index.css";

const VIK = ({ VIKArticles }) => {
  return (
    <div className="row col-offset-fluid ga--vik-gate">
      <div className="col-bs10-10">
        <VIKTitle />
        <div className="article__wrap__grid--vik mt2 col-offset-fluid">
          {VIKArticles.map((vikarticle) => (
            <VIKArticle
              key={vikarticle.id}
              hrefAsset={vikarticle.href}
              srcAsset={vikarticle.src}
              altAsset={vikarticle.alt}
              linkArtTitle={vikarticle.link}
              artTitle={vikarticle.title}
              descArtLead={vikarticle.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VIK;
