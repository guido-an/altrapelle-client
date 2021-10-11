import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import OrdersTable from '../../components/Admin/OrdersTable'
import ContainerApp from '../../components/atoms/ContainerApp';
import orderService from '../../services/orderService'

const service = new orderService()

export const getServerSideProps  = async () => {
    const orders = await service.getAllOrders()
    return { props: orders }
 }

const Ordini = ({ orders }) => {
    return(
        <ContainerApp>
           <OrdersTable orders={orders}/>
        </ContainerApp>
    )
}

  const Container = styled.div`
      overflow-x: auto;     
      margin-top: 20px; 
`




export default Ordini;
//export default withPrivateRoute(Ordini);
