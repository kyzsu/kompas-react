import React from 'react';
import VerticalArticleThumbnail from '../../atoms/VerticalArticleThumbnail';
import VerticalArticleTitle from '../../atoms/VerticalArticleTitle';
import VerticalArticleInfo from '../../atoms/VerticalArticleInfo';

export default function VerticalArticleItem({ title, url, category, date, thumbnail }) {
  return (
    <div className="d-flex">
      <div className="mr-3">
        <VerticalArticleThumbnail href={url} src={thumbnail} title={title} />
      </div>
      <div className="w-100 d-flex flex-column justify-content-between pb-2 border-bottom">
        <VerticalArticleTitle href={url} text={title} />
        <VerticalArticleInfo category={category} date={date} />
      </div>
    </div>
  );
}
