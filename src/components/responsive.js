import styled from 'styled-components'

export const Mobile = styled.div`
  display: block;

  @media (min-width: 600px) {
    display: none;
  }
`

export const Desktop = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`
