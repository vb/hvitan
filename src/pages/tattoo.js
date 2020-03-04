import React from 'react'
import { Text, H1 } from '../components/typography'
import Layout from '../components/layout'
import SEO from '../components/seo'
import imgSrc from '../images/olle-alm-tattoo-hvitan.jpg'
import Img from '../components/image'
import { Mobile } from '../components/responsive'
import Button from '../components/button'

const Tattoo = () => (
  <Layout>
    <SEO title="Tattoo" />
    <Mobile>
      <H1>Tattoo</H1>
    </Mobile>
    <Text>
      Tatueringarna på Kollektivet Hvitan görs av Olle. Han gick som lärling på
      den högt aktade studion East Street Tattoo där han även jobbat de senaste
      6 åren. Olle gör de flesta typer av tatueringar men han föredrar de mer
      traditionella. Besök @ollejunior för att se ett axplock av de tatueringar
      han gjort.
    </Text>
    <Button data-ga="Book tatto" href="mailto:olle@hvitan.com">
      Boka tid
    </Button>
    <Img src={imgSrc} alt="Olle Alm Tattoo Hvitan" />
  </Layout>
)

export default Tattoo
