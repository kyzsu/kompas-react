import React from 'react';
import VerticalArticleThumbnail from '../../atoms/VerticalArticleThumbnail';
import VerticalArticleTitle from '../../atoms/VerticalArticleTitle';
import VerticalArticleInfo from '../../atoms/VerticalArticleInfo';

export default function VerticalArticleItem({ title, category, date, thumbnail }) {
  return (
    <div className="d-flex">
      <VerticalArticleThumbnail src={thumbnail} title={title} />
      <div>
        <VerticalArticleTitle text={title} />
        <VerticalArticleInfo category={category} date={date} />
      </div>
    </div>
  );
}
