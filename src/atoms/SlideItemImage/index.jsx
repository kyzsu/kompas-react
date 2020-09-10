import React from 'react';
import './style.css';

export default function SlideItemImage({ src, alt }) {
  return <img src={src} alt={alt} className="slide__image" />;
}
