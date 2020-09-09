import React from 'react';
import './style.css';

export default function BottomBarItem({ text, href }) {
  return (
    <a href={href} className="bottombar__item">
      {text}
    </a>
  );
}
