import React from 'react';
import './style.css';
import UserPostAvatar from '../../atoms/UserPostAvatar';
import UserPostAuthor from '../../atoms/UserPostAuthor';
import UserPostTitle from '../../atoms/UserPostTitle';

export default function UserPostItem({ user, url, title }) {
  return (
    <div className="d-flex">
      <UserPostAvatar url={user.avatar} username={user.username}/>
      <div className="flex-grow-1 pl-2">
        <UserPostAuthor username={user.username} title={user.title} url={user.profileUrl}/>
        <UserPostTitle href={url} text={title}/>
      </div>
    </div>
  );
}