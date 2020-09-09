import React from 'react';
import './style.css';

export default function VerticalArticleTitle({ text }) {
  return (
    <h3 className="vertical-article__title">
      {text}
    </h3>
  );
}