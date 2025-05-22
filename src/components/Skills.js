import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { FaGraduationCap, FaMusic, FaRunning, FaHeartbeat, FaPalette } from 'react-icons/fa';

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  
  const skillsData = [
    {
      title: 'Education',
      icon: <FaGraduationCap />,
      skills: ['Early Childhood Education', 'Elementary Education', 'Higher Education', 'Teacher Training', 'Curriculum Development']
    },
    {
      title: 'Physical Education',
      icon: <FaRunning />,
      skills: ['Body Culture', 'Movement Analysis', 'Physical Assessment', 'Sports Training', 'Capoeira']
    },
    {
      title: 'Arts',
      icon: <FaPalette />,
      skills: ['Dance', 'Ballet', 'Contemporary Dance', 'Visual Arts', 'Cultural Programming', 'Artistic Direction']
    },
    {
      title: 'Health & Therapy',
      icon: <FaHeartbeat />,
      skills: ['Therapeutic Practices', 'Rehabilitation', 'Holistic Approaches', 'Wellness Programs']
    },
    {
      title: 'Cultural Management',
      icon: <FaMusic />,
      skills: ['Event Planning', 'Festival Coordination', 'Exhibition Curation', 'Arts Education', 'Community Programs']
    }
  ];

  return (
    <SkillsContainer theme={theme}>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <SkillsGrid>
          {skillsData.map((category, index) => (
            <SkillCard key={index} theme={theme}>
              <IconContainer>
                {category.icon}
              </IconContainer>
              <h3>{category.title}</h3>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </SkillsList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </div>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.section`
  padding: 60px 0;
  background-color: ${props => props.theme === 'dark' ? 'var(--primary-color)' : 'var(--secondary-color)'};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background-color: ${props => props.theme === 'dark' ? 'var(--card-bg-dark)' : 'var(--card-bg-light)'};
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    margin: 15px 0;
    color: var(--accent-color);
    font-size: 1.3rem;
  }
`;

const IconContainer = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 15px;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  
  li {
    padding: 5px 0;
    position: relative;
    padding-left: 15px;
    
    &:before {
      content: "•";
      color: var(--accent-color);
      position: absolute;
      left: 0;
    }
  }
`;

export default Skills;
