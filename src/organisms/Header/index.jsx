import React from 'react';
import HeaderLogo from '../../atoms/HeaderLogo';
import HeaderNav from '../../molecules/HeaderNav';
import './style.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col">
            <HeaderLogo />
          </div>
          <div className="col">
            <HeaderNav />
          </div>
        </div>
      </div>
    </header>
  );
}