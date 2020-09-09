import React from 'react';
import SectionTitle from '../../atoms/SectionTitle';
import VerticalArticleItem from '../../molecules/VerticalArticleItem';

export default function VerticalArticleList({ id, title, articles }) {
  return (
    <section id={id}>
      <SectionTitle text={title} />
      <div className="row">
      {articles.map(article => (
        <div key={article.id} className="col-12">
          <VerticalArticleItem 
            title={article.title}
            category={article.category}
            date={article.date}
            thumbnail={article.thumbnail}
          />
        </div>
      ))}
      </div>
    </section>
  );
}