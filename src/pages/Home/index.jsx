import React from 'react';
import MainLayout from '../../templates/MainLayout';
import bottomBarItems from './data/navbar/bottomBarItems';
import topBarItems from './data/navbar/topBarItems';
import featuredArticles from './data/articles/featured';
import recentArticles from './data/articles/recent';
import userArticles from './data/articles/user';
import slideItems from './data/slide/items';

export default function Home() {
  return (
    <MainLayout
      navbarItems={{
        topBarItems,
        bottomBarItems,
      }}
      articles={{
        featuredArticles,
        recentArticles,
        userArticles
      }}
      slideItems={slideItems}
    />
  );
}
