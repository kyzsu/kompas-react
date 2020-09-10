import React from 'react';
import './style.css';

export default function HorizontalArticleTitle({ text, href }) {
  return (
    <div className="horizontal-article__title">
      <a href={href}>
        <h3>{text}</h3>
      </a>
    </div>
  );
}
