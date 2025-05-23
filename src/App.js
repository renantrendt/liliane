import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './components/NotFound.css';

// Error page component for 404 handling
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404: Page Not Found</h1>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <a href="/">Go back to home page</a>
    </div>
  );
};

// Main content component
const MainContent = () => {
  return (
    <>
      <Header />
      <main>
        <Skills />
        <Timeline />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <ThemeToggle />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
