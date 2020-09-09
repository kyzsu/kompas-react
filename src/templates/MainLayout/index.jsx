import React from 'react';
import TopBar from '../../organisms/TopBar';
import Header from '../../organisms/Header';
import BottomBar from '../../organisms/BottomBar';
import HorizontalArticleList from '../../organisms/HorizontalArticleList';

export default function MainLayout({ navbarItems, featuredArticles }) {
  const { topBarItems, bottomBarItems } = navbarItems;

  return (
    <>
      <TopBar leftMenu={topBarItems.leftMenu} rightMenu={topBarItems.rightMenu} />
      <Header />
      <BottomBar items={bottomBarItems} />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <HorizontalArticleList id="featured" title="Sorotan" articles={featuredArticles} />
          </div>
        </div>
      </div>
    </>
  );
}
