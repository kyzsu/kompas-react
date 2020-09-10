import React from 'react';
import './style.css';

export default function HorizontalArticleBadge({ text, type = 'normal' }) {
  if (type !== 'normal' && type !== 'special') {
    throw Error('Invalid badge type');
  }

  return <span className={`horizontal-article__badge ${type}`}>{text}</span>
}
