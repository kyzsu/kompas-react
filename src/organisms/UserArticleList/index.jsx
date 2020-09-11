import React from 'react';
import SectionTitle from '../../atoms/SectionTitle';
import UserArticleItem from '../../molecules/UserArticleItem';

export default function UserArticleList({ id, title, articles }) {
  return (
    <section id={id}>
      <SectionTitle text={title} center={true} />
      <div className="row mt-3">
        {articles.map(article => (
          <div key={article.id} className="col-12 mb-5">
            <UserArticleItem title={article.title} url={article.url} user={article.user} />
          </div>
        ))}
      </div>
    </section>
  );
}
