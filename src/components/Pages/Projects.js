import React from 'react';
import PWATextEditor from '../assets/PWAtext-editor.jpg';
import SwiftExchange from '../assets/swift exchange.jpg';
import EventFinderr from '../assets/EventFinderr.png';
import WeatherDashBoard from '../assets/WeatherDashBoard.jpg';
import JavaScriptQuiz from '../assets/Javascript quiz.jpg';
import SocialMediaAPI from '../assets/socialmediaAPI.jpg'
import MusicApp from '../assets/Spotify_player.png';

const projects = [
    {
        name: 'PWA Text Editor',
        description: 'Progressive Web Application-Based Text-Editor ',
        imageUrl: PWATextEditor,
        siteUrl: 'https://blooming-fortress-92562-a3dcb56a67d0.herokuapp.com/',
    },
    {
        name: 'Swift Exchange',
        description: 'Online Market Place to Buy and Sell Used Goods',
        imageUrl: SwiftExchange,
        siteUrl: 'https://swiftexchange-c3d0475c88b3.herokuapp.com/',
    },
    {
        name: 'EventFinderr',
        description: 'Weekend Event Planner for Events Happening Near you',
        imageUrl: EventFinderr,
        siteUrl: 'https://amritpal-kaur0.github.io/EventFinderr/',
    },
    {
        name: 'Weather DashBoard',
        description: '5 Day Weather Dashboard for All Major Cities Worldwide',
        imageUrl: WeatherDashBoard,
        siteUrl: 'https://wenboni.github.io/5-Day-Weather-DashBoard/',
    },
    {
        name: 'JavaScript Quiz',
        description: 'Test Your JavaScript Knowledge via and Online Quiz',
        imageUrl: JavaScriptQuiz,
        siteUrl: 'https://wenboni.github.io/JavaScript-Quiz/',
    },
    {
        name: 'Social Media API',
        description: 'Backend API for a social network web application built using MongoDB',
        imageUrl: SocialMediaAPI,
        siteUrl: 'https://github.com/WenboNi/Social-Media-API',
    },
    {
        name: 'Music-App',
        description: 'Music Streaming App for Users to Make Friends, Comment, and Chat About Their Favourite Songs',
        imageUrl: MusicApp,
        siteUrl: 'https://github.com/WenboNi/Social-Media-API',
  },
  ];
  
  const Portfolio = () => {
    return (
      <div className="flex bg-blue-100 flex-wrap justify-center pb-16">
        <h1 className="text-center mb-4">Project Portfolio</h1>
          {projects.map((project, index) => (
            <div className="relative box">
            <div key={index} className="col-md-4 mb-4">
              <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
                <div className="project-image-container position-relative">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="img-fluid rounded"
                  />
                  <div className="project-description position-absolute top-0 start-0 bg-dark text-white d-flex align-items-center justify-content-center">
                    <p className="p-3 m-0">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
            </div>
          ))}
        </div>
    );
  };
  
  export default Portfolio;