import React from "react";
import TopBar from "../../organisms/TopBar";
import Header from "../../organisms/Header";
import BottomBar from "../../organisms/BottomBar";
import HorizontalArticleList from "../../organisms/HorizontalArticleList";
import VerticalArticleList from "../../organisms/VerticalArticleList";
import HeadlineBig from "../../organisms/HeadlineBig";
import Discover from "../../organisms/Discover";

export default function MainLayout({ navbarItems, articles, DiscoverItems }) {
  const { topBarItems, bottomBarItems } = navbarItems;
  const { featuredArticles, recentArticles, headlineArticles } = articles;
  const {
    DiscovItemsLeft,
    DiscovItemsMidLeft,
    DiscovItemsMidRight,
    DiscovItemsRight,
  } = DiscoverItems;
  return (
    <>
      <TopBar
        leftMenu={topBarItems.leftMenu}
        rightMenu={topBarItems.rightMenu}
      />
      <Header />

      <BottomBar items={bottomBarItems} />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col">
                <HeadlineBig headlines={headlineArticles} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <HorizontalArticleList
                  id="featured"
                  title="Sorotan"
                  articles={featuredArticles}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <VerticalArticleList
                  id="recent"
                  title="Berita Terkini"
                  articles={recentArticles}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Discover
                  DisItemLeft={DiscovItemsLeft}
                  DisItemMidLeft={DiscovItemsMidLeft}
                  DisItemMidRight={DiscovItemsMidRight}
                  DisItemRight={DiscovItemsRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
