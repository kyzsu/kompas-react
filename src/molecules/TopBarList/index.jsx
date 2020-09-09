import React from 'react';
import './style.css';
import TopBarItem from '../../atoms/TopBarItem';

export default function TopBarList({ items }) {
  return (
    <ul className="topbar__list">
      {items.map((item, index) => (
        <TopBarItem key={index} href={item.href} text={item.text} />
      ))}
    </ul>
  );
}
