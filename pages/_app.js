
import React from 'react';
import CartContextProvider from '../contexts/CartContext'
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
   html, body {
     margin: 0 auto;
     padding: 0;
   }
`;
 
const theme = {
  colors: {
    primary: "black",
  },
};


function App({ Component, pageProps }) {
    return (
            <CartContextProvider>
              <GlobalStyle />
              <ThemeProvider theme={theme}>
                 <Component {...pageProps} />
              </ThemeProvider>
            </CartContextProvider>
          )
  }
  
export default App