import styled from 'styled-components'
import PropType from 'prop-types'
import ContainerApp from '../../../components/atoms/ContainerApp'
import OrderRecap from '../../../components/molecules/OrderRecap'
import orderService from '../../../services/orderService'


const service = new orderService()

export const getServerSideProps  = async (context) => {
    const { id } = context.params
    const order = await service.getOrder(id)
    return { props: order }
 }

const Ordine = ({ order }) => {
    const { productsInCart, totalPriceOrder, stateOfTheOrder } = order
    const { firstName, lastName, vatOrFiscalCode, address, city, province, zipCode, telephone, email, additionalNotes} = order.billingDetails
    return(
        <ContainerApp>
         <Container>
           <div>
              <p>Ordine #{order._id}</p>
              <p>Stato dell'ordine: {stateOfTheOrder}</p>
             <p><strong>Nome: </strong> {firstName} {lastName}</p>
              <p><strong>P.IVA / Codice Fiscale</strong> {vatOrFiscalCode}</p>
              <p><strong>Indirizzo</strong> {address}, {city}, {province}, {zipCode}</p>
              <p><strong>Telefono</strong> {telephone}</p>
              <p><strong>Email</strong> {email}</p>
              {additionalNotes && <p><strong>Note aggiuntive</strong> {additionalNotes}</p>}
           </div>
           <OrderRecapContainer>
             <OrderRecap 
                products={productsInCart} 
                totalPrice={totalPriceOrder / 100} 
              />
           </OrderRecapContainer>
          </Container>
        </ContainerApp>
    )
}

const Container = styled.div `
    margin: 40px 0  0;
    @media(min-width: 968px){
        display: flex;
        justify-content: space-evenly;
        margin: 20px 0; 
    }
`
const OrderRecapContainer = styled.div `
    @media(min-width: 968px){
        width: 70%;
        position: relative;
        bottom: 20px;
    }
`

  //export default withPrivateRoute(Ordine);
  export default Ordine