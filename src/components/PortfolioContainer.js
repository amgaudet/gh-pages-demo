import React, { useEffect, useState } from 'react';
import NavTabs from './NavTabs';
import pageData from './pages';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Route } from 'react-router-dom';

const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => setCurrentPage(page);

  const pages = Object.keys(pageData);
  const data = { pages, currentPage, handlePageChange };

  return (
    <BrowserRouter>
      <NavTabs {...data} />
      <Route path='/' exact component={Home} />
      <Route path='/About' exact component={About} />
      <Route path='/Blog' exact component={Blog} />
      <Route path='/Contact' exact component={Contact} />
    </BrowserRouter>
  );
}

export default PortfolioContainer;
