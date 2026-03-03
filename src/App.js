import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentSections from './components/ContentSections';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <ContentSections />
        <Gallery />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
