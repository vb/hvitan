import React, { useState } from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu as Hamburger } from 'react-icons/gi'
import { IoMdClose as Closebutton } from 'react-icons/io'
import { Mobile } from '../responsive'
import List from './list'

const Button = styled.button`
  position: fixed;
  z-index: 2;
  background: #222;
  bottom: 10px;
  right: 10px;
  appearance: none;
  border: none;
  padding: 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
`

const MenuButton = ({ onClick, open }) => (
  <Button onClick={onClick} open={open}>
    {open ? <Closebutton color={'#fff'} /> : <Hamburger color={'#fff'} />}
  </Button>
)

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  text-align: center;
  flex-direction: column;

  li {
    margin: 5% 0;
  }

  a {
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  [aria-current='page'] {
    background-color: #222;
    color: #fff;
  }
`

const Navigation = () => (
  <Container>
    <List />
  </Container>
)

export default () => {
  const [open, toggleOpen] = useState(false)

  const onClick = () => toggleOpen(open => !open)

  return (
    <Mobile>
      <MenuButton onClick={onClick} open={open} />
      {open && <Navigation />}
    </Mobile>
  )
}
