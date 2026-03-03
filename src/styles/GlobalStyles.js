import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap');
  
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }
  
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  
  a {
    text-decoration: none;
    color: inherit;
    transition: ${({ theme }) => theme.transitions.normal};
  }
  
  ul, ol {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.bgSecondary};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }
  
  /* Selection */
  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
  
  /* Container */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
  
  /* Section padding */
  section {
    padding: ${({ theme }) => theme.spacing['3xl']} 0;
  }
  
  /* Utility classes */
  .text-center {
    text-align: center;
  }
  
  .text-white {
    color: ${({ theme }) => theme.colors.textWhite};
  }
  
  .mb-sm { margin-bottom: ${({ theme }) => theme.spacing.sm}; }
  .mb-md { margin-bottom: ${({ theme }) => theme.spacing.md}; }
  .mb-lg { margin-bottom: ${({ theme }) => theme.spacing.lg}; }
  .mb-xl { margin-bottom: ${({ theme }) => theme.spacing.xl}; }
`;

export default GlobalStyles;
