import React from 'react'
import Link from 'next/link'
import productService from '../services/productService'

const service = new productService()

// export const getStaticProps = async () => { 
//   return {
//     props: { products: await service.getAllProducts() }
//   }
// }

const Home = ({ products }) => {
  return(
      <div>
        <h1>HOME</h1>
        {/* {products.map(product => (
          <Link href={"/" + product.slug} key={product.id}>
            <p>{product.name}</p>
          </Link>
        ))} */}
        <style jsx>{`
             
        `}</style>
      </div>
  )
}

export default Home


