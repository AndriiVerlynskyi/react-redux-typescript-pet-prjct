import * as React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainRouter from './router';


const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(18, 24, 40)',
      light: 'rgb(101, 116, 139)'
    },
    secondary: {
      main: 'rgb(209, 213, 219)',
      light: 'rgba(255, 255, 255, 0.08)'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components:{
    MuiCssBaseline: {
      styleOverrides:{
        scrollBehavior: 'smooth',
        scrollbarWidth: 'thin',
        scrollbarColor: '#17171a transparent',
        '&::-webkit-scrollbar': {
          width: 10,
          height: 3,
          backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: 3,
          backgroundColor: '#17171a',
          minHeight: 10,
          minWidth: 10,
        },
        '&::-webkit-scrollbar-thumb:focus': {
          backgroundColor: '#17171a',
        },
        '&::-webkit-scrollbar-thumb:active': {
          backgroundColor: '#17171a',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#17171a',
        },
        '&::-webkit-scrollbar-corner': {
          backgroundColor: 'transparent',
        }
      }
    }
  }
})

// export type ThemeTypes 

const App: React.FC = () => {
  
  
  return (
    <ThemeProvider theme={theme}>
      <MainRouter/>
    </ThemeProvider>
  );
}

export default App;