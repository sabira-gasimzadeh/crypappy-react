import React from 'react'
import "../Components/App.css"
import Container from './Section_hero'
import About from './Section_about'
import Mobile from './Section_mobile'
import Friendly from './Section_friendly'
import Reviews from './Section_reviews'
import Pricing from "./Section_pricing"
import Banner from './Section_banner'
import Footer from './Footer'


const HomeRouter = () => {
  return (
    <div>
      <Container />
      <About />
      <Mobile />
      <Friendly />
      <Reviews />
      <Pricing />
      <Banner />
      <Footer />
    </div>
  )
}

export default HomeRouter