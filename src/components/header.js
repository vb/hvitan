import React from 'react'
import styled from 'styled-components'

const Logo = styled.h1`
  margin-top: 40px;
  color: red;
`

const Header = ({ siteTitle }) => <Logo>{siteTitle}</Logo>

export default Header
