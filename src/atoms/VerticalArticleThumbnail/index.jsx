import React from 'react';
import './style.css';

export default function VerticalArticleThumbnail({ src, title, href }) {
  return (
    <a href={href} className="vertical-article__thumbnail">
      <img src={src} alt={`Thumbnail ${title}`} />
    </a>
  );
}
