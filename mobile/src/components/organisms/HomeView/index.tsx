import React from 'react';
import EmptyPageContent from '../../templates/EmptyPageContent';
import HomePhoto from '../../../assets/HomePhoto';

const HomeView = () => (
  <EmptyPageContent
    fillerPhoto={<HomePhoto />}
    headlineMedium="Welcome to AGSL!"
    headlineSmall="All your shopping lists in one place"
  />
);
export default HomeView;
