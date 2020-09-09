import React from 'react';
import './style.css';

export default function HeaderButtonLink({ text, href }) {
  return (
    <a className="header__buttonlink" href={href}>{text}</a>
  );
}