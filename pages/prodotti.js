import React from 'react'
import Link from 'next/link'
import productService from '../services/productService'
import DisplayProducts from '../components/molecules/DisplayProducts'

const service = new productService()

export const getStaticProps = async () => { 
  return {
    props: { products: await service.getAllProducts() }
  }
}

const Products = ({ products }) => {
  return(
      <>
        <DisplayProducts products={products}/>
      </>
  )
}

export default Products


