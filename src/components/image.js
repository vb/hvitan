import React from 'react'
import styled from 'styled-components'

const Figure = styled.figure`
  margin: 0;
  position: relative;
`

const Figcaption = styled.figcaption`
  font-size: 0.75em;
  padding: 0.25em 0.5em;
  background-color: #fff;
  position: absolute;
  bottom: 4px;
  right: 1px;
`

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  display: block;
  height: auto;
`
export default ({ caption, ...props }) => (
  <Figure>
    <Image {...props} />
    {caption && <Figcaption>{caption}</Figcaption>}
  </Figure>
)
