import React from 'react';
import './style.css';

export default function UserArticleTitle({ text, href }) {
  return (
    <a href={href} className="user-post__title">
      {text}
    </a>
  );
}
