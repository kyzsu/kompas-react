import React from "react";
import HeadlineThumbItem from "../../molecules/HeadlineThumbItem/index";
import "./index.css";

const HeadlineThumb = ({ HeadlineThumbArticles }) => {
  return (
    <div className="headline__thumb">
      <ul className="headline__thumb__row slick-slider">
        <div className="slick-list">
          <div className="slick-track">
            {HeadlineThumbArticles.map((Articles) => (
              <HeadlineThumbItem
                key={Articles.id}
                href={Articles.href}
                hrefTitle={Articles.title}
                image={Articles.src}
                imageAlt={Articles.alt}
              />
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default HeadlineThumb;
