import React from 'react';
import './style.css';

export default function VerticalArticleThumbnail({ src, title, href }) {
  return (
    <a href={href}>
      <img src={src} className="vertical-article__thumbnail" alt={`Thumbnail ${title}`} />
    </a>
  );
}
