import React from 'react';
import SlideArrow from '../../atoms/SlideArrow';
import './style.css';

export default function SlideNav({ items, activeItem, changeSlide }) {
  const prevSlide = () => {
    if (activeItem === 0) {
      changeSlide(items.length - 1);
    } else {
      changeSlide(activeItem - 1)
    }
  }

  const nextSlide = () => {
    if (activeItem === items.length - 1) {
      changeSlide(0);
    } else {
      changeSlide(activeItem + 1)
    }
  }

  return (
    <div className="slide__nav">
      <SlideArrow type="prev" onClick={prevSlide}/>
      <SlideArrow type="next" onClick={nextSlide}/>
    </div>
  );
}
