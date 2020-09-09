import React from 'react';
import MainLayout from '../../templates/MainLayout';
import bottomBarItems from './data/navbar/bottomBarItems';
import topBarItems from './data/navbar/topBarItems';

export default function Home() {
  return (
    <MainLayout navbarItems={{
      topBarItems,
      bottomBarItems
    }}/>
  );
}