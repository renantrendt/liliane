import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #121212;
    --secondary-color: #f8f8f8;
    --accent-color: #6c63ff;
    --text-primary: #f8f8f8;
    --text-secondary: #121212;
    --background-dark: #121212;
    --background-light: #f8f8f8;
    --timeline-dot-dark: #6c63ff;
    --timeline-dot-light: #6c63ff;
    --timeline-line-dark: rgba(255, 255, 255, 0.2);
    --timeline-line-light: rgba(0, 0, 0, 0.2);
    --card-bg-dark: #1e1e1e;
    --card-bg-light: #ffffff;
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--background-dark);
    color: var(--text-primary);
    transition: var(--transition);
  }

  body.light-mode {
    background-color: var(--background-light);
    color: var(--text-secondary);
  }

  a {
    text-decoration: none;
    color: var(--accent-color);
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 40px;
    text-align: center;
  }

  @media (max-width: 768px) {
    .section {
      padding: 40px 0;
    }

    .section-title {
      font-size: 1.8rem;
      margin-bottom: 30px;
    }
  }
`;

export default GlobalStyles;
