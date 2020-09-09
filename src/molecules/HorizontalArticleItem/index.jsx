import React from 'react';
import HorizontalArticleBadge from '../../atoms/HorizontalArticleBadge';
import HorizontalArticleTitle from '../../atoms/HorizontalArticleTitle';
import HorizontalArticleThumbnail from '../../atoms/HorizontalArticleThumbnail';

export default function HorizontalArticleItem({ title, url, category, isSpecial, thumbnail }) {
  return (
    <div className="position-relative">
      <HorizontalArticleThumbnail src={thumbnail} title={title} />
      <HorizontalArticleBadge text={category} type={isSpecial ? 'special' : 'normal'} />
      <HorizontalArticleTitle text={title} href={url} />
    </div>
  );
}
