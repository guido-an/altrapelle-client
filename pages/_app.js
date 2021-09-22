
import React from 'react';
import CartContextProvider from '../contexts/CartContext'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from '../components/Layout/Layout';

const GlobalStyle = createGlobalStyle`
   html, body {
     margin: 0 auto;
     padding: 0;
     font-family: 'Poppins';
   }
`;
 
const theme = {
  colors: {
    blue: "#153d6d",
    lightBlue: '#60bfc2',
    yellow: '#ffc900',
    backgroundGrey: '#ebebed',
    greyText: '#595b62'
  },
  mobileContainer: `${20}px`,
  desktopContainer: 10,
  
};

function App({ Component, pageProps }) {
    return (
            <CartContextProvider>
              <GlobalStyle />
              <ThemeProvider theme={theme}>
                <Layout>
                   <Component {...pageProps} />
                 </Layout>
              </ThemeProvider>
            </CartContextProvider>
          )
  }
  
export default App