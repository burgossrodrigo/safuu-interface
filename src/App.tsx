import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material';



function App() {

  const theme = createTheme({
    typography: {
      fontFamily: ['Helvetica, Arial, sans-serif'].join(','),
      body1: {
        color: '#FFFFFF', // white
      },
      body2: {
        color: '#FFFFFF', // white
      },
      // ...rest of the typography styles
    },
    palette: {
      mode: 'dark',
      background: {
        paper: '#212121', // dark gray
        default: '#303030', // slightly lighter dark gray
      },
      primary: {
        main: '##0B890B', // primary color
        contrastText: '#FFFFFF', // white
      },
      secondary: {
        main: '##FF6501', // secondary color
        contrastText: '#FFFFFF', // white
      },
      success: {
        main: '#4CAF50',
        dark: '#388E3C',
        contrastText: '#FFFFFF', // white
        light: '#81C784',
      },
    },
  });

  
  return (
    <>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/:chain/Pools/" element={<Pools />} />
            <Route path="/:chain/Pools/:poolAddress" element={<PoolPage />} />
            <Route path="/:chain/Tokens" element={<Tokens />} />
            <Route path="/:chain/Tokens/:tokenAddress" element={<TokenPage />} /> */}
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
