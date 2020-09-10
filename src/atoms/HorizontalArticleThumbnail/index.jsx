import React from 'react';
import './style.css';

export default function HorizontalArticleThumbnail({ src, title }) {
  return (
    <img src={src} className="horizontal-article__thumbnail" alt={`Thumbnail ${title}`} />
  );
}
