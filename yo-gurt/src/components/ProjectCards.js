import React from 'react'
import './ProjectCards.css'
import CardItem from './CardItem'
import { Button } from './Button'

function ProjectCards() {

  return (
    <div className = 'cards'>
        <h1>Club Portfolio of Projects</h1>
        <div className="cards__button-wrapper">
            <Button
            buttonStyle='btn--empty'
            buttonSize='btn--large'
            to='https://docs.google.com/forms/d/e/1FAIpQLSd3sV3TQAq63Zwnk-mq3sWgY-2DdM6ex88TIGNj36Q7xlJpbA/viewform'>
                Request Upload →
            </Button>
        </div>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/plant-disease.png' 
                    label='Computer Vision'
                    text='Detect Plant Diseases With 99.7% Accuracy'
                    path='https://colab.research.google.com/drive/1Ph_PLu97_bUQMI5iP40OD8Sk6Tp-pEvs?usp=sharing'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/shakespeare.png' 
                    label='NLP / Skeleton Project'
                    text='Generate Shakespearean Text'
                    path='https://colab.research.google.com/drive/1tG0HFmAvxklnu-lxXLe_zEWPeh--IfDm?usp=sharing'
                    />
                    <CardItem
                    src='/images/mdcs.png'
                    label='Computer Vision'
                    text='MNIST digit-classification model (no libraries)'
                    path='https://github.com/dshi08/Digit-Classification/blob/main/digit-classification/digits.ipynb'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProjectCards;
