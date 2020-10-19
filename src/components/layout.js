import React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Links from './links'
import Navigation from './navigation/index'
import { with100vh } from '../utils/use100vh'
import './global.css'

const Container = with100vh(styled.div`
  max-width: 528px;
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`)

const Layout = ({ children }) => (
  <Container>
    <div>
      <Logo />
      <Navigation />
    </div>
    <main>{children}</main>
    <Links />
  </Container>
)

export default Layout
