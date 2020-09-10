import React from 'react';
import BottomBarItem from '../../atoms/BottomBarItem';
import BottomBarDropdown from '../BottomBarDropdown';
import './style.css';

export default function BottomBarList({ items }) {
  return (
    <ul className="bottombar__list">
      {items.map((item, index) => {
        if (item.items?.length > 0) {
          return (
            <BottomBarDropdown key={index} href={item.href} text={item.text} items={item.items} />
          );
        }

        return (
          <li key={index} className="d-inline-block">
            <BottomBarItem href={item.href} text={item.text} />;
          </li>
        );
      })}
    </ul>
  );
}
