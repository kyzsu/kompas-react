import React from 'react';
import HorizontalArticleBadge from '../../atoms/HorizontalArticleBadge';
import HorizontalArticleTitle from '../../atoms/HorizontalArticleTitle';
import HorizontalArticleThumbnail from '../../atoms/HorizontalArticleThumbnail';

export default function HorizontalArticleItem({ title, url, badge, thumbnail }) {
  return (
    <div className="position-relative">
      <HorizontalArticleThumbnail src={thumbnail} />
      <HorizontalArticleBadge text={badge.text} type={badge.type} />
      <HorizontalArticleTitle text={title} href={url} />
    </div>
  );
}
