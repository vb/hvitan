import React from 'react'
import { Text, H1 } from '../components/typography'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Mobile } from '../components/responsive'
import Button from '../components/button'

const Tattoo = () => (
  <Layout>
    <SEO title="Tattoo" />
    <Mobile>
      <H1>Tattoo</H1>
    </Mobile>
    <Text>
      Tatueringarna på Kollektivet Hvitan görs av{' '}
      <a
        href="https://www.instagram.com/ollejunior/"
        target="_blank"
        data-ga="Olle Instagram button"
      >
        Olle Alm
      </a>{' '}
      och{' '}
      <a
        href="https://www.instagram.com/ollejunior/"
        target="_blank"
        data-ga="Olle Instagram button"
      >
        Jonte Palm
      </a>
    </Text>
    <Button data-ga="Book Olle tatto" href="mailto:olle@hvitan.com">
      Kontakta Olle
    </Button>
    <Button data-ga="Book Jonte tatto" href="mailto:jontebookings@gmail.com">
      Kontakta Jonte
    </Button>
  </Layout>
)

export default Tattoo
