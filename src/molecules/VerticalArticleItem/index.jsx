import React from 'react';
import VerticalArticleThumbnail from '../../atoms/VerticalArticleThumbnail';
import VerticalArticleTitle from '../../atoms/VerticalArticleTitle';
import VerticalArticleInfo from '../../atoms/VerticalArticleInfo';

export default function VerticalArticleItem({ title, url, category, date, thumbnail }) {
  return (
    <div className="d-flex">
      <VerticalArticleThumbnail href={url} src={thumbnail} title={title} />
      <div>
        <VerticalArticleTitle href={url} text={title} />
        <VerticalArticleInfo category={category} date={date} />
      </div>
    </div>
  );
}
