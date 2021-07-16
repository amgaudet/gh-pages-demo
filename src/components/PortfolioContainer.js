import React, { useEffect, useState } from 'react';
import NavTabs from './NavTabs';
import pageData from './pages';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Route } from 'react-router-dom';

const PortfolioContainer = () => {
  useEffect(() => {
    setCurrentPage(pathname)
  }, []);

  const { pathname } = window.location;
  const [currentPage, setCurrentPage] = useState('/');

  const handlePageChange = (page) => setCurrentPage();

  const pages = Object.keys(pageData);
  const data = { pages, currentPage, handlePageChange };

  return (
    <BrowserRouter>
      <NavTabs {...data} />
      <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
      <Route path={`${process.env.PUBLIC_URL}/About`} exact component={About} />
      <Route path={`${process.env.PUBLIC_URL}/Blog`} exact component={Blog} />
      <Route path={`${process.env.PUBLIC_URL}/Contact`} exact component={Contact} />
    </BrowserRouter>
  );
}

export default PortfolioContainer;
