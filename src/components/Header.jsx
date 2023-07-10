import React from 'react'
import '../style/header.css'
import logo from '../images/JA.png'

function Header() {
  return (
    <>
    <header>
        <div id='logo'>
            <img src={logo} alt='Logo de la empresa' />
        </div>
    </header>
    </>
  )
}

export default Header