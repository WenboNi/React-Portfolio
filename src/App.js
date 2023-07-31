import './App.css';
import React, { useState } from 'react';
import Homepage from './components/Pages/Homepage';
import Aboutme from './components/Pages/Aboutme';
import Portfolio from './components/Pages/Projects';
import Resume from './components/Pages/Resume';
import Contact from './components/Pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer'

const App = () => {
    const [currentPage, setCurrentPage] = useState("Homepage")
    const handlePageChange = (page) => {
        if (page === "Homepage") {
            return <Homepage />
        }
        else if (page === "Aboutme") {
            return <Aboutme />
        }
        else if (page === "Portfolio") {
            return <Portfolio />
        }
        else if (page === "Resume") {
            return <Resume />
        }
        else if (page === "Contact") {
            return <Contact />
        }

    }
    return (
        <>
        <Header setCurrentPage = {setCurrentPage} currentPage = {currentPage}/>
        {handlePageChange(currentPage)}
        <Footer />
        </>
    )
}

export default App;
