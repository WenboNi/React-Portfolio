import React from 'react';



export default function Aboutme() {
  return (
    <div style={aboutMeStyle} id="about">
        <div style={imageContainerStyle}>
            <img
            src="src\assets\Passportphoto.jpeg.jpg" 
            alt="Profile"
            style={imageStyle}
            />
        </div>
        <h2>About Me</h2>
            <p>
                Hi There! My name is Wenbo Ni, and I am a creative web developer with an endless drive to create high level, problem-solving applications.
                
                I have a background in business/economics as well as several years of experience in the casualty insurance field.
                After years of probing and contemplation, I have decided to pursue a career in technology/coding. My goal is to 
                pursue a fulfilling and purposeful career in the field of software engineering and eventually dive into the 
                world of A.I. programming
            </p>
            <br />
            <p>
                I grew up in Auckland, New Zealand and moved to Halifax, Nova Scotia with my family at the age of 10.
                We then relocated to Toronto, Ontario 3 years later. When I first came to Canada, I wanted to persue a career
                in hockey but later my interests transitioned to basketball and football. I completed my post-secondary education at Wilfred Laurier
                Univeristy in business and economics. I initially wanted to get into a career in banking but things didn't work out as I thought
                so I got into the insurance / risk management world. Recently, I developed an interest in coding and have decided 
                to re-route my professional career in this direction
            </p>
            <br />
            <p>
                My hobbies and interests are mainly active based. I like to engage in physical activity as much as my free time allows.
                I enjoy watching and playing all sorts of different sports. Mainly basketball, football, and martial arts as previously
                mentioned. I also really enjoy outdoor scenery as well as movie-critiquing.
            </p>
            <h3>Head On Over to The Projects Section to Take a Look at Some of The Projects I Have Been Working on Recently!</h3>
    </div>
  );
};
const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
};
  
const imageStyle = {
    width: '200px',   
    height: '200px',  
    borderRadius: '50%',
    objectFit: 'cover',
};
const aboutMeStyle = {
  padding: '1rem',
  backgroundColor: '#f9f9f9',
};



