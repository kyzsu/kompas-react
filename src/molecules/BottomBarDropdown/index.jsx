import React from 'react';
import BottomBarItem from '../../atoms/BottomBarItem';
import BottomBarSub from '../BottomBarSub';
import './style.css';

export default function BottomBarDropdown({ text, href, items }) {
  return (
    <li className="relative d-inline-block">
      <BottomBarItem text={text} href={href} />
      <BottomBarSub items={items}/>
    </li>
  );
}
