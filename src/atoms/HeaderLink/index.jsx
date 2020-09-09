import React from 'react';
import './style.css';

export default function HeaderLink({ text, href }) {
  return <a href={href} className="header__link">{text}</a>;
}
