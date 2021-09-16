import React from 'react'
import { useContext, useEffect} from 'react';
import { CartContext } from "../contexts/CartContext"
import Link from 'next/link'
import NoProductsInCart from '../components/atoms/NoProuctsInCart';

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

    const displayProductsInCart = () => {
        return productsInCart.map(product => {
            const { id, name, price, quantity } = product
            return(
                <div key={id}>
                    {name}
                    {price}€ x {quantity}
                    <span 
                    onClick={() => handleQuantityInCart(product, 'increase')}>+</span> 
                    <span 
                    onClick={() => handleQuantityInCart(product, 'decrease')}>-</span>
                   <p onClick={() => removeFromCart(product.id)}>delete</p>
                </div>
            )
        })
    }

    return(
        <>
          <h1>Carrello</h1>
             {productsInCart.length === 0 ? 
                <NoProductsInCart/> :
                <>
                  {displayProductsInCart()}
                  <strong>Total: {totalPrice}</strong>
                  <Link href="/checkout">Checkout</Link>
                </>
             }
        </>
    )
}

export default Cart 