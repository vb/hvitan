import React from 'react'
import styled from 'styled-components'
import { AiFillInstagram as InstagramIcon } from 'react-icons/ai'
import { MdEmail as MailIcon } from 'react-icons/md'
import { FaFacebookSquare as FacebookIcon } from 'react-icons/fa'
import { FaPhone as PhoneIcon } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1em 0;

  @media (min-width: 600px) {
    justify-content: space-around;
  }
`

const Link = styled.a`
  border: 0;
  width: 220px;
  text-align: left;
  background-color: transparent;
  color: #222;
  text-decoration: none;
  line-height: 2em;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    flex: 0 0 1em;
  }
`

const Links = () => {
  return (
    <Container>
      <Link href="tel:0046739777072" data-ga="Phone button">
        <PhoneIcon /> 0739 77 70 72
      </Link>
      <Link
        href="https://www.instagram.com/kollektivet.hvitan/"
        data-ga="Instagram button"
        target="_blank"
        rel="nofollow noopener"
      >
        <InstagramIcon /> @kollektivet.hvitan
      </Link>
      <Link
        data-ga="Contact button"
        href="mailto:shopen@hvitan.com"
        target="_blank"
        rel="nofollow noopener"
      >
        <MailIcon /> shopen@hvitan.com
      </Link>
      <Link
        href="https://www.facebook.com/hvitan/"
        data-ga="Facebook button"
        target="_blank"
        rel="nofollow noopener"
      >
        <FacebookIcon /> /hvitan
      </Link>
    </Container>
  )
}

export default Links
