import React from 'react'
import { Link } from 'react-router-dom';

const NavLink = ({ currentPage, handlePageChange, page }) => {
  const to = `${process.env.PUBLIC_URL}/` + (page === 'Home' ? '' : page.toLowerCase());
  const onClick = () => {
    handlePageChange(to);
  };
  const className = currentPage === to ? 'nav-link active' : 'nav-link';
  const data = { onClick, to, className };

  return (
    <li className="nav-item">
      <Link {...data}>{page}</Link>
    </li>
  );
};

const NavLinks = ({ currentPage, handlePageChange, pages }) => {
  return pages.map(page => {
    const data = { page, currentPage, handlePageChange };
    return <NavLink key={page} {...data} />;
  });
};


export default NavLinks;