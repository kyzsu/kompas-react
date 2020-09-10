import React from 'react';
import SideArticleNumber from '../../atoms/SideArticleNumber';
import SideArticleTitle from '../../atoms/SideArticleTitle';
import SideArticleViewCount from '../../atoms/SideArticleViewCount';
import './style.css';

export default function SideArticleItem({ title, url, viewCount, number }) {
  return (
    <div className="d-flex">
      <SideArticleNumber number={number} />
      <a href={url} className="side-article__content">
        <div className="mb-2">
          <SideArticleTitle text={title} />
        </div>
        <SideArticleViewCount count={viewCount} />
      </a>
    </div>
  );
}
