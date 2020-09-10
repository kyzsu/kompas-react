import React from 'react';
import './style.css';

export default function VerticalArticleInfo({ category, date }) {
  return (
    <div className="vertical-article__info">
      <span className="vertical-article__category">{category}</span>
      <span className="vertical-article__date">{date}</span>
    </div>
  );
}
