import React from 'react';
import './style.css';

export default function SideArticleViewCount({ count }) {
  return <span className="side-article__view-count">Dibaca {count} kali</span>;
}
