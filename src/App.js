import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <ThemeToggle />
      <div className="App">
        <Header />
        <main>
          <Skills />
          <Timeline />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
