import React from 'react';
import './style.css';

export default function SectionTitle({ text, center = false }) {
  if (text == null) {
    return null;
  }
  
  return (
    <div className={`section__title ${center ? 'justify-content-center' : ''}`}>
      <h2>{text}</h2>
    </div>
  );
}
