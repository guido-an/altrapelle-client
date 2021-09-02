import { createContext, useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';


export const CartContext = createContext()

const CartContextProvider = props => {
   const [productsInCart, setProductsInCart] = useState([])

   const addToCart = (product, inputQuantity) => {
      let productIsPresent = false 
      // Add first product 
        if(productsInCart.length === 0){
            setProductsInCart([...productsInCart, product])
            return
        }
      // Check if the product is already present in cart 
        productsInCart.forEach(productInCart => {
            if(productInCart.id === product.id){
              productIsPresent = true 
              alert('Prodotto già presente nel carrello, ne potrai modificare la quantità durante il checkout')
              return 
            }
        })
       if(!productIsPresent){
         // Add quantity property
         product.quantity = inputQuantity
         setProductsInCart([...productsInCart, product])
       }
   }

let sharedState = {
    addToCart
}

  return (
    <CartContext.Provider value={sharedState}>
        {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider