
import React from 'react';
import CartContextProvider from '../contexts/CartContext'

function App({ Component, pageProps }) {

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
      }, []);

    return (
            <CartContextProvider>
               <Component {...pageProps} />
            </CartContextProvider>
          )
  }
  
  
export default App
