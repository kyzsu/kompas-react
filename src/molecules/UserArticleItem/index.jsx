import React from 'react';
import UserArticleAvatar from '../../atoms/UserArticleAvatar';
import UserArticleAuthor from '../../atoms/UserArticleAuthor';
import UserArticleTitle from '../../atoms/UserArticleTitle';

export default function UserArticleItem({ user, url, title }) {
  return (
    <div className="d-flex">
      <UserArticleAvatar url={user.avatar} username={user.name} />
      <div className="flex-grow-1 pl-3">
        <div className="mb-1">
          <UserArticleAuthor username={user.name} title={user.title} url={user.url} />
        </div>
        <UserArticleTitle href={url} text={title} />
      </div>
    </div>
  );
}
