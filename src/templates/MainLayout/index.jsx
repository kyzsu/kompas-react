import React from 'react';
import TopBar from '../../organisms/TopBar';
import Header from '../../organisms/Header';
import BottomBar from '../../organisms/BottomBar';

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <Header />
      <BottomBar />
    </>
  );
}
