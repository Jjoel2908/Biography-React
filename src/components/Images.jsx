import React from 'react'
import '../style/images.css'
import guitar from '../images/guitar1.png'
import bycle from '../images/bycle1.png'
import me from '../images/Joel1.png'

function images() {
  return (
    <>
    <div className="top">
        <ul>
            <li>
                <img src={guitar} alt='Guitar Image' className='myphotos' />
            </li>
            <li>
                <img src={me} alt='Image' className='myphotos' />
            </li>
            <li>
                <img src={bycle} alt='Bycle Image' className='myphotos' />
            </li>
        </ul>
    </div>
    </>

  )
}

export default images