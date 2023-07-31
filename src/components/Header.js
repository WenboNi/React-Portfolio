import React from 'react';
import NavBar from './Navigation';

export default function Header(props) {
  console.log(props)
    return (
      <header style={headerStyle}>
        <h1 style={nameStyle}>Wenbo Ni</h1>
        <NavBar setCurrentPage = {props.setCurrentPage} currentPage = {props.currentPage}/>
      </header>
    );
  };
  
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    padding: '1rem',
    color: '#fff',
  };
  
  const nameStyle = {
    margin: 0,
  };
  