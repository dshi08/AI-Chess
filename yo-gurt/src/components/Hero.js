import React from 'react'
import '../App.css'
import { Button } from './Button'
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero-content'>
            <h1> AI CHESS</h1>
            <p> Where students get better, one move at a time </p>
        </div>
        <div className='hero-imgs'>
            <img src='/images/pieces.png' alt='python-logo' className='python'/>
        </div>
        <div className='hero-btns'>
            <Button className='btns' 
            buttonStyle='btn--filled'
            buttonSize='btn--large'
            to='https://docs.google.com/forms/d/e/1FAIpQLSeXoTRbhvNvsAfxWUihoT3GBH-37amXsnO7RAGjDSaVUAZFLw/viewform?usp=header'> Join now→ </Button>
        </div>
    </div>
  )
}

export default Hero
