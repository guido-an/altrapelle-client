import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

const CartContextProvider = props => {
   const [productsInCart, setProductsInCart] = useState([])

     useEffect(() => {
      const productsFromStorage = JSON.parse(localStorage.getItem('productsFromStorage'))
      productsFromStorage ? setProductsInCart(productsFromStorage) : setProductsInCart([])
    }, [])
  
   const addToLocalStorage = (product) => {
       // retrieve it (Or create a blank array if there isn't any info saved yet),
       let products = JSON.parse(localStorage.getItem('productsFromStorage')) || [];
       // add to it,
       products.push(product);
      // then put it back.
      localStorage.setItem('productsFromStorage', JSON.stringify(products));
   }

   const addToCart = (product, inputQuantity) => {
      let productIsPresent = false 
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
         addToLocalStorage(product)
       }
   }
   
   let sharedState = {
       addToCart,
       productsInCart
   }

  return (
    <CartContext.Provider value={sharedState}>
        {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider