import React from 'react'
import Grain from './components/Grain'
import ExitPopup from './components/ExitPopup'
import Ticker from './components/Ticker'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ComoFunciona from './components/ComoFunciona'
import SobreMi from './components/SobreMi'
import Resultados from './components/Resultados'
import Precios from './components/Precios'
import Calculadora from './components/Calculadora'
import FAQ from './components/FAQ'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Grain />
      <ExitPopup />
      <Navbar />
      <Hero />
      <Ticker />
      <ComoFunciona />
      <SobreMi />
      <Resultados />
      <Precios />
      <Calculadora />
      <FAQ />
      <Contacto />
      <Footer />
    </>
  )
}
