
// import App from 'next/app'
import CartContextProvider from '../contexts/CartContext'

function App({ Component, pageProps }) {
    return (
            <CartContextProvider>
               <Component {...pageProps} />
            </CartContextProvider>
          )
  }
  
  
export default App
