import React from 'react';
import {EmptyPageContent} from 'templates';
import {HomePhoto} from 'assets';

const HomeView = () => (
  <EmptyPageContent
    fillerPhoto={<HomePhoto />}
    headlineMedium="Welcome to AGSL!"
    headlineSmall="All your shopping lists in one place"
  />
);
export default HomeView;
