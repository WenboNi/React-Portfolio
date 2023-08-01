import React from 'react';
import Myphoto from '../assets/Passportphoto.jpeg.jpg'

export default function Homepage() {
    return (
      <div id="home" className="hero-container overflow-hidden ">

        <div className="relative min-w-screen h-screen hero-bg">
          <div className="absolute bg-white opacity-92 p-4 sm:p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/4 flex flex-col-reverse sm:flex-row justify-center items-center">
            <div className="p-2 box info-side text-center sm:text-left flex-grow sm:flex-grow-0 mt-4 sm:mt-0">
              <h1 className="text-3xl font-bold mb-4 drop-shadow-2xl shadow-black">
                Hello! Welcome To My Web Development Portfolio
              </h1>
              <p className=" font-serif font-bold">
                Feel free to browse around and checkout what I've built so far as an aspiring full-stack web developer.
                Here, you can learn some information about who I am, view the most recent front-end and back-end applications
                I have built, take a look into my professional experiences & credentials, and contact me with a message if 
                you wish!
              </p>
             
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 flex-grow-0 flex items-center justify-center sm:justify-end">
                <img
                    className="h-25 w-25"
                    src={Myphoto}
                    alt="headshot"
                />
            </div>
          </div>
        </div>
      </div>
    );
  }