import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  background-color: transparent;
  color: #222;
  text-decoration: none;
  border-bottom: 2px solid #222;
`

export default ({ children, external, ...props }) =>
  external ? (
    <Link target="_blank" rel="nofollow noopener" {...props}>
      {children}
    </Link>
  ) : (
    <Link {...props}>{children}</Link>
  )
