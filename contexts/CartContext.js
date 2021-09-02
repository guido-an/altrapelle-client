import { createContext, useState } from 'react';

export const CartContext = createContext()

const CartContextProvider = props => {
   const [productsInCart, setProductsInCart] = useState([])

const addToCart = (product) => {
    console.log(product, 'product from context')
    setProductsInCart([...productsInCart, product])
}
console.log(productsInCart, 'productsInCart')

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