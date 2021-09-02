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
    const { name } = product[0]
    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Product