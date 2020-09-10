import React from 'react';
import SideArticleItem from '../../molecules/SideArticleItem';
import SectionTitle from '../../atoms/SectionTitle';

export default function SideArticleList({ id, title, articles }) {
  return (
    <section id={id}>
      <SectionTitle text={title} center={true} />
      <div className="row">
        {articles.map((article, index) => (
          <div key={article.id} className="col-12 mb-1">
            <SideArticleItem
              title={article.title}
              url={article.url}
              viewCount={article.view_count}
              number={index + 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
