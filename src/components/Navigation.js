import React, { useState } from 'react';

export default function NavBar({ setCurrentPage, currentPage }) {

  console.log(setCurrentPage)
  return (
    <nav style={{ display: 'inline-block' }}>
      <ul className="nav-links">
        <li
          className={currentPage === 'Homepage' ? 'active' : ''}
          onClick={() => setCurrentPage('Homepage')}
        >
            Homepage
        </li>
        <li
          className={currentPage === 'Aboutme' ? 'active' : ''}
          onClick={() => setCurrentPage('Aboutme')}
        >
            AboutMe
        </li>
        <li
          className={currentPage === 'Portfolio' ? 'active' : ''}
          onClick={() => setCurrentPage('Portfolio')}
        >
            Portfolio
        </li>
        <li
          className={currentPage === 'Resume' ? 'active' : ''}
          onClick={() => setCurrentPage('Resume')}
        >
            Resume/Skills
        </li>
        <li
          className={currentPage === 'Contact' ? 'active' : ''}
          onClick={() => setCurrentPage('Contact')}
        >
            Contact Me
        </li>
      </ul>
      {/* {activeTab === 'Homepage' && <Homepage />}
      {activeTab === 'Aboutme' && <Aboutme />}
      {activeTab === 'Portfolio' && <Portfolio />}
      {activeTab === 'Resume' && <Resume />}
      {activeTab === 'Contact' && <Contact />} */}
    </nav>
  );
};
