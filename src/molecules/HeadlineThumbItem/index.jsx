import React from "react";
import HeadlineThumbImage from "../../atoms/HeadlineThumbImage/index";
import HeadlineThumbLink from "../../atoms/HeadlineThumbLink/index";
import "./index.css";

const HeadlineThumbItem = ({ key, href, hrefTitle, image, imageAlt }) => {
  return (
    <li className="Headline-Thumb-Item" key={key}>
      <HeadlineThumbImage image={image} alt={imageAlt} />
      <HeadlineThumbLink href={href} alt={hrefTitle} />
    </li>
  );
};

export default HeadlineThumbItem;
