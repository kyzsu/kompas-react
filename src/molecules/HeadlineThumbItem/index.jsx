import React from "react";
import HeadlineThumbImage from "../../atoms/HeadlineThumbImage/index";
import HeadlineThumbLink from "../../atoms/HeadlineThumbLink/index";
import "./index.css";

const HeadlineThumbItem = ({ href, hrefAlt, image, imageAlt }) => {
  return (
    <li className="Headline-Thumb-Item">
      <HeadlineThumbImage image={image} alt={imageAlt} />
      <HeadlineThumbLink href={href} alt={hrefAlt} />
    </li>
  );
};

export default HeadlineThumbItem;
