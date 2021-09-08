import { useContext, useEffect} from 'react';
import { CartContext } from "../contexts/CartContext"

const Cart = () => {
    const {
        productsInCart, 
        totalPrice, 
        calculateTotalPrice, 
        removeFromCart, 
        handleQuantityInCart 
    } = useContext(CartContext)

    useEffect(() => {
        calculateTotalPrice()
    }, [productsInCart])

    return(
        <div>
             <h1>Carrello</h1>
             {productsInCart.map(product => {
                 const { id, name, price, quantity } = product
                 return(
                     <div key={id}>
                         {name}
                         {price}€ x {quantity}
                         <span onClick={() => handleQuantityInCart(product, 'increase')}>+</span> <span onClick={() => handleQuantityInCart(product, 'decrease')}>-</span>
                        <p onClick={() => removeFromCart(product.id)}>delete</p>

                     </div>
                 )
             })}
             <strong>Total: {totalPrice}</strong>
        </div>
    )
}

export default Cart 