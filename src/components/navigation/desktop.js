import React from 'react'
import List from './list'
import styled from 'styled-components'
import { Desktop } from '../responsive'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    padding: 5px 10px;
    display: block;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  [aria-current='page'] {
    background-color: #222;
    color: #fff;
  }
`

export default () => (
  <Desktop>
    <Container>
      <List />
    </Container>
  </Desktop>
)
