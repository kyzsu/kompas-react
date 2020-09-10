import React from "react";
import HeadlineBigItem from "../../molecules/HeadlineBigItem/index";
import "./index.css";

const HeadlineBig = ({ headlines }) => {
  return (
    <div className="Headline-Big">
      <ul className="Headline-Big-Row">
        {headlines.map((headline) => (
          <div key={headline.id}>
            <HeadlineBigItem
              hrefLink={headline.link}
              imageImg={headline.src}
              altImg={headline.alt}
              textTitle={headline.title}
              datetimeDate={headline.date}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default HeadlineBig;
