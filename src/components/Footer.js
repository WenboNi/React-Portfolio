import React from 'react';

const Footer = () => {
  const githubUrl = 'https://github.com/WenboNi';
  const linkedinUrl = 'https://www.linkedin.com/in/wenbo-ni-582516134/';
  const facebookUrl = 'https://www.facebook.com/wenbo.ni.9/';

  return (
    <footer style={{
      position: 'relative',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
      height: '10%',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div className="flex space-x-4 justify-center sm:justify-center">
          <a href={githubUrl} style={{ fontSize: '30px', margin: '0 20px'}}>
            <i className="fab fa-github" />
          </a>
          <a href={linkedinUrl} style={{ fontSize: '30px', margin: '0 20px'}}>
            <i className="fab fa-linkedin" />
          </a>
          <a href={facebookUrl} style={{ fontSize: '30px', margin: '0 20px'}}>
            <i className="fab fa-facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





