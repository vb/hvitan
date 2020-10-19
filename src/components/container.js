import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 550px) {
    margin-left: calc(-100vw / 2 + 528px / 2);
    margin-right: calc(-100vw / 2 + 528px / 2);
    flex-direction: row;
  }

  @media (min-width: 1028px) {
    width: 1028px;
    margin-left: -250px;
    margin-right: -250px;
    padding: 0 1em;
  }

  a {
    color: inherit;
    font-weight: bold;
  }
`

const Column = styled.div`
  width: 100%;
  order: ${({ text }) => (text ? 2 : 1)};

  @media (min-width: 550px) {
    width: 50%;
    order: 1;

    ${({ text }) =>
      text &&
      css`
        padding: 1em;
        padding-left: 0;
      `}
    ${({ textRight }) =>
      textRight &&
      css`
        padding: 1em;
        padding-right: 0;
      `}
  }
`

export default ({ text, image, textFirst }) => (
  <Container>
    {textFirst ? (
      <>
        <Column text>{text}</Column>
        <Column>{image}</Column>
      </>
    ) : (
      <>
        <Column>{image}</Column>
        <Column text textRight>
          {text}
        </Column>
      </>
    )}
  </Container>
)
