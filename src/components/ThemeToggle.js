import React, { useContext } from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: var(--accent-color);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: var(--transition);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: scale(1.1);
  }
`;

export default ThemeToggle;
