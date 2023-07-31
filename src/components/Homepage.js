import React from 'react';
import Header from './Header';
import AboutMe from './Pages/Aboutme';
import Portfolio from './Pages/Projects';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default HomePage;