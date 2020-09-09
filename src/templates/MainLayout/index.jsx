import React from 'react';
import TopBar from '../../organisms/TopBar';
import Header from '../../organisms/Header';
import BottomBar from '../../organisms/BottomBar';

export default function MainLayout({ navbarItems }) {
  const { topBarItems, bottomBarItems } = navbarItems;

  return (
    <>
      <TopBar leftMenu={topBarItems.leftMenu} rightMenu={topBarItems.rightMenu}/>
      <Header />
      <BottomBar items={bottomBarItems} />
    </>
  );
}
