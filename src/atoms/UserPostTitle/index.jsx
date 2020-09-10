import React from 'react';
import './style.css';

export default function UserPostTitle({ text, href }) {
  return (
    <a href={href} className="user-post__title">
      {text}
    </a>
  );
}
