import React from 'react';
import BottomBarList from '../../molecules/BottomBarList';
import './style.css';

export default function BottomBar({ items }) {
  return (
    <nav className="bottombar">
      <div className="container">
        <div className="row">
          <div className="col">
            <BottomBarList items={items} />
          </div>
        </div>
      </div>
    </nav>
  );
}
