import React from "react";
import TopBar from "../../organisms/TopBar";
import Header from "../../organisms/Header";
import BottomBar from "../../organisms/BottomBar";
import HorizontalArticleList from "../../organisms/HorizontalArticleList";
import VerticalArticleList from "../../organisms/VerticalArticleList";
import HeadlineBig from "../../organisms/HeadlineBig";
import HeadlineThumb from "../../organisms/HeadlineThumb";
import Slide from "../../molecules/Slide";
import SideArticleList from "../../organisms/SideArticleList";
import UserArticleList from "../../organisms/UserArticleList";
import Footer from "../../organisms/Footer/index";
import GTPList from "../../organisms/GramediaTopikPilihanList";
import VIK from "../../organisms/VIK";
import Discover from "../../organisms/Discover";

export default function MainLayout({
  navbarItems,
  articles,
  slideItems,
  DiscoverLists,
}) {
  const { topBarItems, bottomBarItems } = navbarItems;
  const {
    popularArticles,
    featuredArticles,
    recentArticles,
    headlineArticles,
    HeadlineThumbArticles,
    userArticles,
    gramediaAds,
    VIKArticles,
  } = articles;
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
          <div className="col-8">
            <div className="row">
              <div className="col">
                <HeadlineBig headlines={headlineArticles} />
                <HeadlineThumb HeadlineThumbArticles={HeadlineThumbArticles} />
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
            <div className="row mt-3">
              <div className="col">
                <Slide items={slideItems} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <VIK VIKArticles={VIKArticles} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <VerticalArticleList id="recent-2" articles={recentArticles} />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col">
                <SideArticleList
                  id="popular"
                  title="Terpopuler"
                  articles={popularArticles}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <UserArticleList
                  id="user-post"
                  title="Kolom"
                  articles={userArticles}
                />
              </div>
            </div>
            {/* Gramedia dan Topik Pilihan */}
            <div className="row">
              <div className="col">
                <GTPList GramediaItems={gramediaAds} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Discover DiscoverLists={DiscoverLists} />
      <Footer />
    </>
  );
}
