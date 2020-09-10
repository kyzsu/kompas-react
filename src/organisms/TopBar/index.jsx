import React from 'react';
import './style.css';
import TopBarList from '../../molecules/TopBarList';

export default function TopBar({ leftMenu, rightMenu }) {
  return (
    <nav className="topbar">
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-between">
            <TopBarList items={leftMenu} />
            <TopBarList items={rightMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}
