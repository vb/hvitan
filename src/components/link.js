import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Internal = styled(Link)`
  background-color: transparent;
  color: #222;
  text-decoration: none;
  border-bottom: 2px solid #222;
`

const External = styled.a`
  background-color: transparent;
  color: #222;
  text-decoration: none;
  border-bottom: 2px solid #222;
`

export default ({ children, external, ...props }) =>
  external ? (
    <External target="_blank" rel="nofollow noopener" {...props}>
      {children}
    </External>
  ) : (
    <Internal {...props} to={props.href}>
      {children}
    </Internal>
  )
