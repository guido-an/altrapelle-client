import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import OrdersTable from '../../components/Admin/OrdersTable'
import ContainerApp from '../../components/atoms/ContainerApp';
import orderService from '../../services/orderService'
import authService from '../../services/authService'

const OrderService = new orderService()
const AuthService = new authService()

export const getServerSideProps  = async () => {
    const orders = await OrderService.getAllOrders()
    return { props: orders }
 }

const Ordini = ({ orders }) => {
    const [proceed, setProceed] = useState(false)
  const router = useRouter()

    useEffect(() => {
        async function checkIfLoggedIn () {
          try {
            const response = await AuthService.loggedin()
            if (response.user) {
                setProceed(true)
            }
          } catch (e) {
            router.push('/admin/login') 
            console.log(e)
          }
        }
        checkIfLoggedIn()
      }, [])
 
      if(!proceed){
          <p>Loading...</p>
      }

      const calculateTotalRevenue = () => {
         let totalRevenue = 0
         orders.forEach(order => totalRevenue += order.totalPriceOrder)
         return totalRevenue.toFixed(2)
      }

    return(
      proceed &&  (
        <ContainerApp>
        <TotalRevenue>Totale entrate: {calculateTotalRevenue()}€</TotalRevenue>
         <OrdersTable orders={orders}/>
     </ContainerApp>
      )
    )
}

  const TotalRevenue = styled.p`  
      margin-top: 20px; 
`
export default Ordini;
// export default withPrivateRoute(Ordini);
