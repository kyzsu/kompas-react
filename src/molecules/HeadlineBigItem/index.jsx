import React from "react";
import HeadlineBigDate from "../../atoms/HeadlineBigDate/index";
import HeadlineBigImage from "../../atoms/HeadlineBigImage/index";
import HeadlineBigTitle from "../../atoms/HeadlineBigTitle/index";
import HeadlineSubtitle from "../../atoms/HeadlineSubtitle/index";
import "./index.css";

const HeadlineBigItem = ({
  hrefLink,
  imageImg,
  altImg,
  textTitle,
  datetimeDate,
}) => {
  return (
    <li className="Headline-Big-Item">
      <a className="Headline-Big-Link" href={hrefLink}>
        <HeadlineSubtitle />
        <HeadlineBigImage image={imageImg} alt={altImg} />
        <div className="Headline-Big-Box">
          <HeadlineBigTitle text={textTitle} />
          <HeadlineBigDate datetime={datetimeDate} />
        </div>
      </a>
    </li>
  );
};

export default HeadlineBigItem;
