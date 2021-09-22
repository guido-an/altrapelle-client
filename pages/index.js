import React from 'react'
import Link from 'next/link'
import productService from '../services/productService'
import Hero from '../components/Home/Hero'
import SubHero from '../components/Home/SubHero'

const service = new productService()

export const getStaticProps = async () => { 
  return {
    props: { products: await service.getAllProducts() }
  }
}

const Home = ({ products }) => {
  return(
      <div>
        <Hero/>
        <SubHero/>
        {/* {products.map(product => (
          <Link href={"/" + product.slug} key={product.id}>
            <p>{product.name}</p>
          </Link>
        ))} */}
      </div>
  )
}

export default Home


