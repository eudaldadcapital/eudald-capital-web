import React from 'react'
import Grain from './components/Grain'
import ExitPopup from './components/ExitPopup'
import WhatsAppButton from './components/WhatsAppButton'
import Ticker from './components/Ticker'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ComoFunciona from './components/ComoFunciona'
import SobreMi from './components/SobreMi'
import Resultados from './components/Resultados'
import SPChart from './components/SPChart'
import Comparativa from './components/Comparativa'
import Errores from './components/Errores'
import Quiz from './components/Quiz'
import Precios from './components/Precios'
import PlazasBar from './components/PlazasBar'
import Calculadora from './components/Calculadora'
import FAQ from './components/FAQ'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Grain />
      <ExitPopup />
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <Ticker />
      <ComoFunciona />
      <SobreMi />
      <Resultados />
      <SPChart />
      <Comparativa />
      <Errores />
      <Quiz />
      <Precios />
      <PlazasBar />
      <Calculadora />
      <FAQ />
      <Contacto />
      <Footer />
    </>
  )
}
