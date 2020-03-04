import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const ListItem = styled.li`
  list-style: none;

  a {
    text-decoration: none;
    color: #222;
  }
`

const pages = [
  {
    url: '/',
    name: 'Start',
  },
  {
    url: '/barbershop',
    name: 'Barbershop',
  },
  {
    url: '/tattoo',
    name: 'Tattoo',
  },
  {
    url: '/om-hvitan',
    name: 'Om Hvitan',
  },
]

export default () =>
  pages.map(page => (
    <ListItem key={page.name}>
      <Link to={page.url}>{page.name}</Link>
    </ListItem>
  ))
