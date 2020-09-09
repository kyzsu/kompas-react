import React from 'react';
import HorizontalArticleItem from '../../molecules/HorizontalArticleItem';
import SectionTitle from '../../atoms/SectionTitle';

export default function VerticalArticle({ id, title, articles }) {
  return (
    <section id={title}>
      <SectionTitle text={title} />
      <div className="row">
        {articles.map(article => (
          <div key={article.id} className="col">
            <HorizontalArticleItem
              title={article.title}
              url={article.url}
              badge={{
                text: article.badge.text,
                type: article.badge.type,
              }}
              thumbnail={article.thumbnail}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
