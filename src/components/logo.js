import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Image from './image'
import imgSrc from '../images/logo.png'

const Container = styled(Link)`
  margin-bottom: 1em;
`

const Logo = () => {
  return (
    <Container to={'/'}>
      <Image src={imgSrc} />
    </Container>
  )
}

export default Logo
