import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

const CartContextProvider = props => {
   const [productsInCart, setProductsInCart] = useState([])
   const [totalPrice, setTotalPrice] = useState(0)
   
     useEffect(() => {
       setProductsFromStorage()   
    }, [])

    const setProductsFromStorage = () => {
      const productsFromStorage = JSON.parse(localStorage.getItem('productsFromStorage'))
      productsFromStorage ? setProductsInCart(productsFromStorage) : setProductsInCart([])
    }
  
   const addToLocalStorage = (product) => {
       let products = JSON.parse(localStorage.getItem('productsFromStorage')) || [];
       products.push(product);
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
  
   const removeFromCart = (productId) => {
       const array = productsInCart.filter(product => product.id !== productId)
       setProductsInCart(array)
       localStorage.setItem('productsFromStorage', JSON.stringify(array));
   }

   const calculateTotalPrice = () => {
       let total = 0
       productsInCart.forEach(product => {
          total += product.quantity * product.price
       })
       setTotalPrice(total)
   }

    const handleQuantityInCart = (product, action) => {
      const array = productsInCart.map(item => {
         // Pevent below 0
        if(item.quantity === 1 && action === 'decrease'){ 
          item.quantity = 1 
          return item
        } 
         // Edit product quantity
        if(item.id === product.id){
           action === 'increase' ? item.quantity++ : item.quantity--
           return item
        } 
        // Return as they were before other products in cart 
          return item
      })      
      setProductsInCart(array)
      localStorage.setItem('productsFromStorage', JSON.stringify(array));
    }

   let sharedState = {
       addToCart,
       productsInCart,
       calculateTotalPrice,
       totalPrice,
       removeFromCart,
       handleQuantityInCart
   }

  return (
    <CartContext.Provider value={sharedState}>
        {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider