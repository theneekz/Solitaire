import React from 'react';
import LayoutPile from './LayoutPile.component'

const Layout = () => {
  return (
    <div className="boardBottom">
      <LayoutPile />
      <LayoutPile />
      <LayoutPile />
      <LayoutPile />
      <LayoutPile />
      <LayoutPile />
      <LayoutPile />
    </div>
  );
};

export default Layout;
