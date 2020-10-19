import React from 'react'
import { Text, H1, H2 } from '../components/typography'
import Layout from '../components/layout'
import SEO from '../components/seo'
import johanSrc from '../images/johan-olsson-barberare-hvitan.jpg'
import henrySrc from '../images/henry-apler-barberare-hvitan.jpg'
import davidSrc from '../images/david-jonsson-barberare-hvitan.jpg'
import olleSrc from '../images/olle-alm-tattoo-hvitan.jpg'
import jonteSrc from '../images/jonatan-palm-tattoo-hvitan.jpeg'
import Img from '../components/image'
import Container from '../components/container'
import { Mobile } from '../components/responsive'

const About = () => (
  <Layout>
    <SEO title="Om Hvitan" />
    <Mobile>
      <H1>Om Hvitan</H1>
    </Mobile>
    <Text>Någon bra inledande text kanske</Text>
    <Container
      text={
        <>
          <H2>Johan Olsson</H2>
          <Text>
            Johan började som lärling på en barbershop i Stockholm 2012 för att
            sedan fortsätta sin utbildning på London school of barbering, en av
            Londons bästa barberarskolor. Direkt efter utbildningen började han
            jobba på en barbershop där han efter kort tid stod fullbokad. Han
            hann även med att gå en kurs i Rotterdam för att få en större
            inblick i andra barberares sätt att jobba på.
          </Text>
        </>
      }
      image={<Img src={johanSrc} alt="Johan Olsson Barbershop Hvitan" />}
      textFirst
    />
    <Container
      text={
        <>
          <H2>Henry Apler</H2>
          <Text>
            Henry följde sin väns fotspår och blev 2014 lärling i den barbershop
            där Johan jobbade. Han fattade tycke för yrket snabbt och redan 2015
            åkte han för att utbilda sig på The Knights School of Barbering i
            Dublin, Irland. Med ett tidigare intresse för de klassiska
            frisyrerna från 40 och 50-talet och mycket slit så stod Henry snabbt
            fullbokad när han kom hem till Stockholm efter utbildningen.
          </Text>
        </>
      }
      image={<Img src={henrySrc} alt="Henry Apler Barbershop Hvitan" />}
    />
    <Container
      text={
        <>
          <H2>David Jonsson</H2>
          <Text>
            David är det nyaste tillskottet på Kollektivet Hvitan där han
            började som lärling under våren 2017. Därefter gick det fort och
            under sommaren samma år gick han i Johans fotspår och utbildade sig
            i en av Londons främsta barberingsskolor, London School of
            Barbering.
          </Text>
        </>
      }
      image={<Img src={davidSrc} alt="David Jonsson Barbershop Hvitan" />}
      textFirst
    />
    <Container
      text={
        <>
          <H2>Olle Alm</H2>
          <Text>
            Olle gick som lärling på den högt aktade studion East Street Tattoo
            där han även jobbat de senaste 6 åren. Olle gör de flesta typer av
            tatueringar men han föredrar de mer traditionella. Besök{' '}
            <a
              href="https://www.instagram.com/ollejunior/"
              target="_blank"
              data-ga="Olle Instagram button"
            >
              @ollejunior
            </a>{' '}
            för att se ett axplock av de tatueringar han gjort.
          </Text>
        </>
      }
      image={<Img src={olleSrc} alt="Olle Alm Tattoo Hvitan" />}
    />
    <Container
      text={
        <>
          <H2>Jonatan Palm</H2>
          <Text>
            Jonatan kommer från Halmstad där han gick som lärling hos Amigo Ink.
            Sedan 2014 bor han i Stockholm och har varit hos Kollektivet Hvitan
            sedan 2018. Tunna linjer är lite av Jonatans specialitet men även
            traditionella designer går fint. Besök{' '}
            <a
              href="https://www.instagram.com/jonatanpalm/"
              target="_blank"
              data-ga="Olle Instagram button"
            >
              @jonatanpalm
            </a>{' '}
            för att se vad han hittar på för något.
          </Text>
        </>
      }
      image={<Img src={jonteSrc} alt="Jonatan Palm Tattoo Hvitan" />}
      textFirst
    />
  </Layout>
)

export default About
