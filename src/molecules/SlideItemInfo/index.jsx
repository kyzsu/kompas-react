import React from 'react';
import SlideItemTitle from '../../atoms/SlideItemTitle';
import SlideItemDesc from '../../atoms/SlideItemDesc';
import './style.css';

export default function SlideInfo({ title, description }) {
  return (
    <div className="slide__info">
      <SlideItemTitle text={title} />
      <SlideItemDesc text={description} />
    </div>
  );
}
