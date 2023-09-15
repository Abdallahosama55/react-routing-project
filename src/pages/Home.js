import React from 'react'

import { CardImg } from 'react-bootstrap'
import Img from '../assets/avataaars.svg'
import '../App.css'
function Home() {
  return (
    <div className='Home '>
    <div className='Home-card'>
    <CardImg src={Img} className='card-img'></CardImg>
    <h1>START FRAMEWORK</h1>

    </div>
    
    
    
    </div>
  )
}

export default Home