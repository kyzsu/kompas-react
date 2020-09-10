import React, { useState, useEffect } from 'react';
import SlideItem from '../SlideItem';
import SlideIndicator from '../SlideIndicator';
import SlideNav from '../SlideNav';

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
      <SlideIndicator items={items} activeItem={activeItem} changeSlide={changeSlide} />
      <div className="p-relative">
        {items.map((item, index) => (
          <SlideItem key={index} content={item} active={index === activeItem} />
        ))}
        <SlideNav items={items} activeItem={activeItem} changeSlide={changeSlide} />
      </div>
    </div>
  );
}
