import React from 'react';

export default function Resume() {
    const resumeButtonStyle = {
        display: 'block',
        marginTop: '1rem',
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: '#333',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        textAlign: 'center',
        cursor: 'pointer',
        border: 'none',
    };
    
    const headingStyle = {
        fontSize: '24px',
        marginTop: '20px',
      };
    
    const listStyle = {
        listStyle: 'none',
        padding: '0',
      };
    
    const listItemStyle = {
        marginBottom: '5px',
      };

    return (
      <div>
        <div id="About " className=" relative ">
            <div className="box m-16 sm:m-46 absolute top-10 xs:top-45 left-10 right-10 bottom-26 sm:bottom-26 bg-white  flex items-center justify-center">
        
            <div className="p-4 m-6">
            <h2 className="text-3xl flex justify-center font-bold mb-10">Resume/CV</h2>
            <p>Click The Button Below for a Comprehensive Look Into my Credentials and Professional Journey</p>
            <button style={resumeButtonStyle} onClick={() => window.open(`${Resume}`)}>
                Download Resume
            </button>
            <h3 style={headingStyle}>Front-end Development Skills</h3>
                <ul style={listStyle}>
                    <li style={listItemStyle}>HTML5</li>
                    <li style={listItemStyle}>CSS3</li>
                    <li style={listItemStyle}>JavaScript</li>
                    <li style={listItemStyle}>React.js</li>
                    <li style={listItemStyle}>Bootstrap</li>
                    <li style={listItemStyle}>JQuery</li>
                </ul>
            <h3 style={headingStyle}>Back-end Development Skills</h3>
                <ul style={listStyle}>
                    <li style={listItemStyle}>Node JS</li>
                    <li style={listItemStyle}>Express JS</li>
                    <li style={listItemStyle}>Mongo DB</li>
                    <li style={listItemStyle}>SQL</li>
                    <li style={listItemStyle}>Restful APIs</li>
                    <li style={listItemStyle}>GraphQL</li>
                </ul>
          </div>
        </div>
      </div>
    </div>
    );
}