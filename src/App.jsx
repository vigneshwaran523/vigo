import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Details from './components/details'
import Why from './components/why'
import How from './components/how'
import Book from './components/book'
import Footer from './components/footer'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Details />
      <Why />
      <How />
      <Book />
      <Footer />

    </div>

  );
}

export default App
