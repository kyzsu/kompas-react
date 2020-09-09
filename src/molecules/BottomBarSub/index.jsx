import React from 'react';
import BottomBarSubItem from '../../atoms/BottomBarSubItem';
import './style.css';

export default function BottomBarSub({ items }) {
  return (
    <ul className="bottombar__sub">
      {items.map((item, index) => (
        <BottomBarSubItem key={index} text={item.text} href={item.href}/>
      ))}
    </ul>
  );
}
