import styled from 'styled-components'
import Link from 'next/link'

const NoProductsInCart = () => {
    return <Text>Non ci sono prodotti presenti nel carrello. Torna alla <Link href="/">Home</Link></Text>
}

const Text = styled.p`
   text-align: center;
   margin: 20vh 0 60vh;
`

export default NoProductsInCart

