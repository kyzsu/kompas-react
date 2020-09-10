import React from 'react';
import './style.css';

export default function UserArticleAvatar({ url, username }) {
  return <img src={url} alt={`${username}'s avatar`} className="user-post__avatar" />;
}
