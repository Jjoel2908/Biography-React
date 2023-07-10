import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Images from './components/Images'
import Body from './components/Body'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <div>
      <Header />
      <Menu />
      <Images />
      <Body />
      <Footer />
    </div>
    </>
  )
}

export default App
