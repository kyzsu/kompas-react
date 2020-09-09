import React from 'react';
import './TopBar.css';
import TopBarList from '../molecules/TopBarList';
import { leftMenu, rightMenu } from './TopBarItems';

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
