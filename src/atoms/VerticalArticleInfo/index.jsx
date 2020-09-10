import React from 'react';
import './style.css';

export default function VerticalArticleInfo({ category, date }) {
  const formattedDate = new Date(date).toLocaleString([], {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <div className="vertical-article__info">
      <span className="vertical-article__category">{category}</span>
      <span className="vertical-article__date">{formattedDate} WIB</span>
    </div>
  );
}
