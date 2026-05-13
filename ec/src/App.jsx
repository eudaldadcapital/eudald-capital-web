import React from 'react'
import CustomCursor from './components/CustomCursor'
import Grain from './components/Grain'
import Ticker from './components/Ticker'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ComoFunciona from './components/ComoFunciona'
import SobreMi from './components/SobreMi'
import Precios from './components/Precios'
import Calculadora from './components/Calculadora'
import FAQ from './components/FAQ'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Grain />
      <Navbar />
      <Hero />
      <Ticker />
      <ComoFunciona />
      <SobreMi />
      <Precios />
      <Calculadora />
      <FAQ />
      <Contacto />
      <Footer />
    </>
  )
}
