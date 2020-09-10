import React from 'react';
import SlideItemImage from '../../atoms/SlideItemImage';
import './style.css';
import SlideInfo from '../SlideItemInfo';

export default function SlideItem({ content, active }) {
  if (!active) {
    return null;
  }

  return (
    <div className="slide__item">
      <SlideItemImage src={content.image} alt={content.title} />
      <SlideInfo title={content.title} description={content.description} />
    </div>
  );
}
