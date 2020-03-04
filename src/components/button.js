import React from 'react'
import styled from 'styled-components'
import { FaHandPointRight as PointerIcon } from 'react-icons/fa'

const Button = styled.a`
  border: 1px solid #222;
  padding: 0.4em 1.5em;
  margin: 1em auto;
  color: #222;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
`

const Center = styled.div`
  text-align: center;
`

export default ({ children, external, ...props }) => (
  <Center>
    {external ? (
      <Button target="_blank" rel="nofollow noopener" {...props}>
        <PointerIcon />
        {children}
      </Button>
    ) : (
      <Button {...props}>
        <PointerIcon />
        {children}
      </Button>
    )}
  </Center>
)
