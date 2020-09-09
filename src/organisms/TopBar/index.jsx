import React from 'react';
import './style.css';
import TopBarList from '../../molecules/TopBarList';
import { leftMenu, rightMenu } from './items';

export default function TopBar() {
  return (
    <nav className="topbar">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <TopBarList items={leftMenu} />
          <TopBarList items={rightMenu} />
        </div>
      </div>
    </nav>
  );
}
