import React, { useState, useEffect } from 'react';
import SlideIndicatorDot from '../../atoms/SlideIndicatorDot';
import SlideItem from '../SlideItem';
import './style.css';

export default function Slide({ items }) {
  const [activeItem, setActiveItem] = useState(0);
  const [needClearInterval, setNeedClearInterval] = useState(false);

  const changeSlide = index => {
    setActiveItem(index);
    setNeedClearInterval(true);
  };

  useEffect(() => {
    if (needClearInterval) {
      setNeedClearInterval(false);
    }

    const slideChanging = setInterval(() => {
      setActiveItem(value => {
        if (value === items.length - 1) {
          return 0;
        }
        return value + 1;
      });
    }, 3500);

    return () => {
      clearInterval(slideChanging);
    };
  }, [items.length, needClearInterval]);

  return (
    <div>
      <div className="d-flex justify-content-center mb-3">
        {items.map((item, index) => (
          <div className="px-1">
            <SlideIndicatorDot
              key={index}
              active={index === activeItem}
              onClick={() => changeSlide(index)}
            />
          </div>
        ))}
      </div>
      {items.map((item, index) => (
        <SlideItem key={index} content={item} active={index === activeItem} />
      ))}
    </div>
  );
}
