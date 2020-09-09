import React from 'react';
import './style.css';

export default function VerticalArticleThumbnail({ src, title }) {
  return (
    <img src={src} className="vertical-article__thumbnail" alt={`Thumbnail ${title}`} />
  );
}
