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
  console.log(products)
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

// async function getStaticProps() {
//   console.log('INSIDE')
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();
//   return {
//     props: { posts },
//   };
// }

export default Home
