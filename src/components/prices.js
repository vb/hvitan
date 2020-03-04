import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  margin: 1em 0;

  thead {
    border-bottom: 1px solid #222;
    text-align: left;
  }

  tbody {
    padding: 10px 0;
    border-bottom: 1px solid #222;
  }

  td,
  th {
    padding: 5px 0;
  }
`

const services = [
  {
    service: 'Haircut, 60 min',
    price: '620 kr',
  },
  {
    service: 'Beardcut, 30 min',
    price: '350 kr',
  },
  {
    service: 'Beard & haircut, 90 min',
    price: '970 kr',
  },
  {
    service: 'Straight razor shave, 90 min',
    price: '750 kr',
  },
  {
    service: 'Childrens Haircut',
    price: '450 kr',
  },
]

export default () => (
  <Table>
    <thead>
      <tr>
        <th>Service</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {services.map(s => (
        <tr key={s.service}>
          <td>{s.service}</td>
          <td>{s.price}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)
