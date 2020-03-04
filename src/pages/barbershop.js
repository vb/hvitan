import React from 'react'
import { Text, H1 } from '../components/typography'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Prices from '../components/prices'
import { Mobile } from '../components/responsive'
import Button from '../components/button'

const Barbershop = () => (
  <Layout>
    <SEO title="Barbershop" />
    <Mobile>
      <H1>Barbershop</H1>
    </Mobile>
    <Text>
      Vår barbershop levererar service av högsta kvalitet. Vi erbjuder klassiska
      herrfrisyrer i en modern tappning, skäggtrimningar och knivrakningar. Vi
      säljer även lokalt producerade hår och skäggvårdsprodukter.
    </Text>
    <Button
      data-ga="Barbershop button from startpage"
      href="https://www.timecenter.se/hvitan/"
      external
    >
      Boka tid
    </Button>
    <Prices />
  </Layout>
)

export default Barbershop
