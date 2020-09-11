import React from 'react';
import MainLayout from '../../templates/MainLayout';
import bottomBarItems from './data/navbar/bottomBarItems';
import topBarItems from './data/navbar/topBarItems';
import featuredArticles from './data/articles/featured';
import recentArticles from './data/articles/recent';
import headlineArticles from './data/articles/headlines';
import popularArticles from './data/articles/popular';
import DiscoverItems from './data/Discover/DiscoverItems';
import visualKompasArticles from './data/articles/VIK';
import HeadlineThumbArticles from './data/articles/headlineThumb';
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
        popularArticles,
        featuredArticles,
        recentArticles,
        userArticles,
        headlineArticles,
        visualKompasArticles,
        HeadlineThumbArticles,
      }}
      slideItems={slideItems}
      DiscoverItems={DiscoverItems}
    />
  );
}
