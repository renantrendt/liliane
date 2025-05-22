import React from 'react';
import styled from 'styled-components';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <p>
            This website is internally made by: 
            <a href="https://bernardoserrano.com" target="_blank" rel="noopener noreferrer">
              bernardoserrano.com
            </a>
            , go check it out, to see cool projects.
          </p>
          <Copyright>
            <FaCopyright /> Copyright @bernardoserrano.com
          </Copyright>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 30px 0;
  background-color: var(--primary-color);
  margin-top: 60px;
`;

const FooterContent = styled.div`
  text-align: center;
  
  p {
    margin-bottom: 10px;
    font-size: 0.9rem;
  }
  
  a {
    color: var(--accent-color);
    font-weight: bold;
    margin: 0 5px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`;

export default Footer;
