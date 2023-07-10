import React from 'react'
import '../style/nav.css'

function Menu() {
  return (
    <>
    <nav>
        <ul>
            <li className='menu'>
                <a href='#profile'>
                    Profile
                </a>
            </li>
            <li className='menu'>
                <a href='#education'>
                    Education
                </a>
            </li>
            <li className='menu'>
                <a href='#experience'>
                    Experience
                </a>
            </li>
            <li className='menu'>
                <a href='#skill'>
                    Skill
                </a>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Menu