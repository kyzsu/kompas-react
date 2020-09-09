import React from 'react';
import './style.css';

export default function BottomBarSubItem({ text, href, active = false }) {
  return (
    <li>
      <a href={href} className={`bottombar__subitem ${active ? 'active' : ''}`}>
        {text}
      </a>
    </li>
  );
}