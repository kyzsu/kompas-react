import React from "react";
import MainLayout from "../../templates/MainLayout";
import bottomBarItems from "./data/navbar/bottomBarItems";
import topBarItems from "./data/navbar/topBarItems";
import featuredArticles from "./data/articles/featured";
import recentArticles from "./data/articles/recent";
import headlineArticles from "./data/articles/headlines";
import popularArticles from "./data/articles/popular";
import HeadlineThumbArticles from "./data/articles/headlineThumb";
import userArticles from "./data/articles/user";
import slideItems from "./data/slide/items";
import gramediaAds from "./data/articles/gramedia";
import VIKArticles from "./data/articles/VIK";
import DiscoverLists from "./data/articles/discover";

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
        HeadlineThumbArticles,
        gramediaAds,
        VIKArticles,
      }}
      slideItems={slideItems}
      DiscoverLists={DiscoverLists}
    />
  );
}
