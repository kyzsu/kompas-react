import React from 'react';
import './style.css';

export default function SectionTitle({ text }) {
  return (
    <div className="section__title">
      <h2>{text}</h2>
    </div>
  );
}
