import React from 'react';
import SearchBox from '../SearchBox';
import HeaderLink from '../../atoms/HeaderLink';
import HeaderButtonLink from '../../atoms/HeaderButtonLink';
import './style.css';

export default function HeaderNav() {
  return (
    <ul className="header__nav">
      <li className="flex-grow-1">
        <SearchBox />
      </li>
      <li className="ml-3">
        <HeaderLink text="Masuk" href="#"/>
      </li>
      <li className="ml-3">
        <HeaderButtonLink text="Baca harian kompas" href="#"/>
      </li>
    </ul>
  );
}