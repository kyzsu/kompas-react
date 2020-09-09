import React from 'react';
import './TopBarItem.css';

export default function TopBarItem({ href, text }) {
  return (
    <li className="d-inline-block">
      <a href={href} className="topbar__text">{text}</a>
    </li>
  );
}
