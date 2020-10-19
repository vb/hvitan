import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Image from './image'
import imgSrc from '../images/logo-small.jpg'

const Container = styled(Link)`
  margin: 1em 0;
  display: block;
`

const Logo = () => {
  return (
    <Container to={'/'}>
      <Image src={imgSrc} />
    </Container>
  )
}

export default Logo
