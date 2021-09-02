import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'


export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}product/get-all`)
  const data = await res.json()
  return {
    props: { products: data }
  }
}

const Home = ({ products }) => {
  return(
      <div>
        <h1>HOME</h1>
        {products.map(product => (
          <Link href={"/" + product.slug} key={product.id}>
            <p>{product.name}</p>
          </Link>
        ))}
        <style jsx>{`
          
        `}</style>
      </div>
  )
}

export default Home
