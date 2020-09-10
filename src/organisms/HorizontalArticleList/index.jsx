import React from 'react';
import HorizontalArticleItem from '../../molecules/HorizontalArticleItem';
import SectionTitle from '../../atoms/SectionTitle';

export default function HorizontalArticleList({ id, title, articles }) {
  return (
    <section id={id}>
      <SectionTitle text={title} />
      <div className="row">
        {articles.map(article => (
          <div key={article.id} className="col-4">
            <HorizontalArticleItem
              title={article.title}
              url={article.url}
              category={article.category}
              isSpecial={article.special}
              thumbnail={article.thumbnail}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
