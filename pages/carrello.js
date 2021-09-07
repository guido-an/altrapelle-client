import { useContext } from 'react';
import { CartContext } from "../contexts/CartContext"

const Cart = () => {
    const { productsInCart } = useContext(CartContext)
    console.log(productsInCart, 'productsInCart carrello')
    return(
        <div>
             <h1>Carrello</h1>
        </div>
    )
}

export default Cart 