import React from 'react';
import SlideIndicatorDot from '../../atoms/SlideIndicatorDot';

export default function SlideIndicator({ items, activeItem, changeSlide }) {
  return (
    <div className="d-flex justify-content-center mb-3">
      {items.map((item, index) => (
        <div key={index} className="px-1">
          <SlideIndicatorDot
            active={index === activeItem}
            onClick={() => changeSlide(index)}
          />
        </div>
      ))}
    </div>
  );
}
