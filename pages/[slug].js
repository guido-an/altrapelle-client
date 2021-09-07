import React, { useContext, useState } from 'react'
import { CartContext } from "../contexts/CartContext"
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.API_URL}product/get-all`)
    const data = await res.json()

    const paths = data.map(product => {
        return {
            params: { slug: product.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const slug = context.params.slug
    const res = await fetch(`${process.env.API_URL}product/get-single/${slug}`)
    const data = await res.json()

    return {
        props: { product: data }
    }
}

const Product = ({ product }) => {
    const [inputQuantity, setInputQuantity] = useState(1)
    const { addToCart } = useContext(CartContext)
    const { name } = product[0]

    return(
        <div>
            <h1>{name}</h1>
            {/* <input type="number" default="1" min="1"></input> */}
            <TextField 
               type="number"
               defaultValue="1"
               fullWidth={true}
               id="outlined-basic"
               InputProps={{
                   inputProps: { 
                       max: 100, min: 1
                   }
               }}
              label="SELECT QUANTITY"
              onChange={(e) => setInputQuantity(e.target.value)}
            />
            <Button 
              variant="contained" 
              color="primary" 
              onClick={()=> addToCart(product[0], inputQuantity)}>
                Add to cart
            </Button>
            <Link href="/carrello">Carrello</Link>
        </div>
    )
}

export default Product