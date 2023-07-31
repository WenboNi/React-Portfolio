import React from 'react';

const Footer = () => {
  const githubUrl = 'https://github.com/WenboNi';
  const linkedinUrl = 'https://www.linkedin.com/in/wenbo-ni-582516134/';
  const facebookUrl = 'https://www.facebook.com/wenbo.ni.9/';

  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '1200px',
        Height: '200px',
        margin: '0 auto',
      }}>
        {/* Add your footer content here */}
        <div className="flex justify-center">
          <a href={githubUrl} className="mr-1">
            <i className="fab fa-github" />
          </a>
          <a href={linkedinUrl} className="mr-4">
            <i className="fab fa-linkedin" />
          </a>
          <a href={facebookUrl}>
            <i className="fab fa-stack-overflow" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





