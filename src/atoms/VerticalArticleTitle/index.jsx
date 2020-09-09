import React from 'react';
import './style.css';

export default function VerticalArticleTitle({ text, href }) {
  return (
    <a href={href} className="vertical-article__title">
      <h3>{text}</h3>
    </a>
  );
}
