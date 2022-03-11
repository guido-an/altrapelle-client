import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import orderService from '../../services/orderService';

const service = new orderService();

const OrdersTable = ({ orders }) => {
  const [inputValue, setInputValue] = useState(''); // change this name (same in database)
  const router = useRouter();

  function TableHead() {
    return (
      <thead>
        <Tr>
          <Th>ID</Th>
          <Th>Cliente</Th>
          <Th>Data</Th>
          <Th>Stato</Th>
          <Th>Totale</Th>
          <Th>Dettagli</Th>
        </Tr>
      </thead>
    );
  }

  function TableBody() {
    return (
      <tbody>
        {orders.map(order => {
          const { _id, totalPriceOrder, stateOfTheOrder, discountCodeWasApplied } = order;
          const { firstName, lastName } = order.billingDetails;
          const { date, time } = order.dateOfCreation;
          return (
            <Tr key={_id}>
              <Td>
                <p>#{_id}</p>
              </Td>
              <Td border="none">
                <p>
                  {firstName} {lastName}
                </p>
              </Td>
              <Td>
                <p>{date}</p>
                <Time>{time}</Time>
              </Td>
              <Td>
                <Select
                  onChange={e => handleChange(_id, e)}
                  defaultValue={stateOfTheOrder}
                  stateOfTheOrder={stateOfTheOrder}
                >
                  <option value="Nuovo">Nuovo</option>
                  <option value="In Lavorazione">In Lavorazione</option>
                  <option value="Completato">Completato</option>
                  <option value="Cancellato">Cancellato</option>
                </Select>
              </Td>
              <Td>
                {totalPriceOrder.toFixed(2)}€
                {discountCodeWasApplied && <Discounted>Scontato</Discounted>}
              </Td>
              <Td>
                <Link href={`/admin/ordini/${_id}`}> Dettagli</Link>
              </Td>
            </Tr>
          );
        })}
      </tbody>
    );
  }

  async function handleChange(_id, e) {
    try {
      setInputValue(e.target.value);
      await service.updateOrderState(_id, e.target.value);
      router.reload(window.location.pathname);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container>
      <Table>
        {TableHead(orders)}
        {TableBody(orders)}
      </Table>
    </Container>
  );
};

const Container = styled.div`
  overflow-x: auto;
  margin-top: 20px;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
const Tr = styled.tr`
  :nth-child(even) {
    background-color: #fafafa;
  }
`;
const Th = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  color: ${({ theme }) => theme.colors.blue};
  @media (min-width: 768px) {
    padding: 15px;
  }
`;
const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  width: 25%;
  :nth-child(1) {
    width: 30%;
  }
  @media (min-width: 768px) {
    padding: 15px 10px;
  }
`;
const Select = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: ${({ stateOfTheOrder, theme }) => {
    if (stateOfTheOrder === 'Nuovo') {
      return 'white';
    }
    if (stateOfTheOrder === 'In Lavorazione') {
      return theme.colors.backgroundGrey;
    }
    if (stateOfTheOrder === 'Completato') {
      return '#C6E1C6';
    }
    if (stateOfTheOrder === 'Cancellato') {
      return '#FF7F7F';
    }
  }};
  color: ${({ stateOfTheOrder, theme }) => {
    if (stateOfTheOrder === 'Nuovo') {
      return '#222';
    }
    if (stateOfTheOrder === 'In Lavorazione') {
      return theme.colors.blue;
    }
    if (stateOfTheOrder === 'Completato') {
      return '#5E8720';
    }
    if (stateOfTheOrder === 'Cancellato') {
      return 'white';
    }
  }};
`;
const Time = styled.p`
  font-size: 14px;
  position: relative;
  bottom: 15px;
`;
const Discounted = styled.span`
  font-size: 14px;
  display: block;
  line-height: 12px;
  position: relative;
`;
export default OrdersTable;
