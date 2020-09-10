import React from 'react';
import './style.css';

export default function SlideIndicatorDot({ active = false, onClick }) {
  return <button className={`slide__indicator-dot ${active ? 'active' : ''}`} onClick={onClick}></button>;
}
