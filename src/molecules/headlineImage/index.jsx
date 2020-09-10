import React from "react";
import headTitle from "../../atoms/headline-title/index";
import Text from "../../atoms/text/index";
import HeadTitle from "../../atoms/headline-title/index";
import "./index.css";

const headlineImage = ({ image, labelHeadline, date, headlineTitle }) => {
  return (
    <div className="headlineImage container">
      <img
        src={
          image
            ? image
            : "https://asset.kompas.com/crops/ufaP0sHDeXidmXuAwf-pr6ImSlk=/0x0:0x0/740x500/data/photo/2020/09/09/5f5881aaa47f3.jpg"
        }
        alt={image}
      />

      <div className={"headlineTitle"}>
        <HeadTitle type="subheading" text={headlineTitle} />
      </div>

      <div className={"labelHeadline"}>
        <Text text={labelHeadline} />
      </div>

      <div className={"date"}>
        <Text text={date} />
      </div>
    </div>
  );
};

export default headlineImage;
