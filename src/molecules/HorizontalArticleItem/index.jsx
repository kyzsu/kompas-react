import React from 'react';
import HorizontalArticleBadge from '../../atoms/HorizontalArticleBadge';
import HorizontalArticleTitle from '../../atoms/HorizontalArticleTitle';
import './style.css';

export default function HorizontalArticleItem({ title, url, badge, thumbnail }) {
  return (
    <div className="position-relative">
      <img src={thumbnail} className="horizontal-article__thumbnail" alt={`Thumbnail ${title}`} />
      <HorizontalArticleBadge text={badge.text} type={badge.type} />
      <HorizontalArticleTitle text={title} href={url} />
    </div>
  );
}
