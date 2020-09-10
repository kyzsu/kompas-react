import React from 'react';
import './style.css';

export default function UserPostAuthor({ username, url, title }) {
  return (
    <div>
      <a className="user-post__author" href={url}>{username}</a>
      <p className="user-post__author-title">{title}</p>
    </div>
  );
}
