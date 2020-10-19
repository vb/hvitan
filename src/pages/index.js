import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Text, TextH1 } from '../components/typography'
import Link from '../components/link'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TextH1 desktopCenter>Kollektivet Hvitan barber &amp; tattoo</TextH1>
    <Text desktopCenter>
      <Link
        data-ga="Map button"
        external
        href="https://www.google.com/maps/place/Kollektivet+Hvitan/@59.3103044,18.0827866,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xa3344d95566321c8!8m2!3d59.3103044!4d18.0849753?hl=sv-SE"
      >
        Katarina Bangata 47
      </Link>
    </Text>
    <Text desktopCenter>
      Boka
      <br />
      <Link href={'/barbershop'}>Barbershop</Link> &nbsp;&nbsp;
      <Link href={'/tattoo'}>Tattoo</Link>
    </Text>
    <Text desktopCenter>
      Öppettider <br />
      vardagar 10:00 - 18:00
    </Text>
  </Layout>
)

export default IndexPage
