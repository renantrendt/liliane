import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import profileImage from '../assets/images/profile.jpeg';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <HeaderContainer theme={theme}>
      <div className="container">
        <HeaderContent>
          <IntroSection>
            <h1>Liliane Soares de Oliveira</h1>
            <p>
              Professional with extensive experience in education, arts, and therapy. 
              With a background spanning from formal education to cultural programming 
              and therapeutic practices, Liliane has dedicated her career to fostering 
              development through movement, arts, and education.
            </p>
            <ContactInfo>
              <p>Porto Alegre - RS, Brazil</p>
              <p>Contact: (51) 99716•6901</p>
              <p>Email: liliane9.educacao@gmail.com</p>
              <p>
                <a 
                  href="https://www.linkedin.com/mwlite/in/liliane-soares-de-oliveira" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </p>
            </ContactInfo>
          </IntroSection>
          <ProfileImageContainer>
            <ProfileImage src={profileImage} alt="Liliane Soares de Oliveira" />
          </ProfileImageContainer>
        </HeaderContent>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  padding: 80px 0 40px;
  background-color: ${props => props.theme === 'dark' ? 'var(--card-bg-dark)' : 'var(--card-bg-light)'};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const IntroSection = styled.div`
  flex: 1;
  padding-right: 40px;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: var(--accent-color);
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  @media (max-width: 768px) {
    padding-right: 0;
    margin-top: 30px;
    
    h1 {
      font-size: 2rem;
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  font-size: 0.9rem;
  
  p {
    margin-bottom: 5px;
  }
  
  a {
    color: var(--accent-color);
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProfileImageContainer = styled.div`
  flex: 0 0 300px;
  
  @media (max-width: 768px) {
    flex: 0 0 200px;
    margin-bottom: 20px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 4px solid var(--accent-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export default Header;
