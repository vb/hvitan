import styled from 'styled-components'

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: ${({ center }) => (center ? 'center' : 'left')};

  @media (min-width: 600px) {
    text-align: ${({ desktopCenter }) => (desktopCenter ? 'center' : 'left')};
  }

  & + & {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const TextH1 = styled.h1`
  font-size: 16px;
  line-height: 1.5;
  font-weight: normal;
  @media (min-width: 600px) {
    text-align: ${({ desktopCenter }) => (desktopCenter ? 'center' : 'left')};
  }

  margin: 0;
  padding: 0;

  & + p {
    margin-top: 0;
  }
`

export const H1 = styled.h1`
  letter-spacing: 2px;
  background: #222;
  color: #fff;
  display: inline-block;
  padding: 5px 10px;
  text-transform: uppercase;
  font-size: 16px;
  margin: 0;
`

export const H2 = styled.h2`
  letter-spacing: 2px;
  background: #222;
  color: #fff;
  display: inline-block;
  padding: 5px 10px;
  text-transform: uppercase;
  font-size: 14px;
  margin: 1em 0 0;
  font-weight: normal;
`
