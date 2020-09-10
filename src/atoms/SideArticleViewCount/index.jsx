import React from 'react';
import './style.css';

export default function SideArticleViewCount({ count }) {
  return <span className="side-article__view-count">Dibaca {Number(count).toLocaleString('id-ID')} kali</span>;
}
