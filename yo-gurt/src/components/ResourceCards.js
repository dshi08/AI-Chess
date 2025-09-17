import React from 'react'
import "./ResourceCards.css"
import CardItem from './CardItem'

function ResourceCards() {
  return (
    <div className='resource-cards'>
      <h1>Resources for learning</h1>
      <h2>Order Matters</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/python-intro.png' 
                    label='Beginner'
                    text='Basics of Python (~2 hours)'
                    path='https://www.youtube.com/watch?v=K5KVEU3aaeQ&t=56s'
                    />
                    <CardItem
                    src='/images/OOP.png' 
                    label='Beginner'
                    text='Object Oriented Programming(OOP) in Python (~35 mins only)'
                    path='https://www.youtube.com/watch?v=JeznW_7DlB0'
                    />
                    <CardItem
                    src='/images/numpy.png' 
                    label='Beginner'
                    text='Numpy, a useful library(~50 mins)'
                    path='https://www.youtube.com/watch?v=4c_mwnYdbhQ'
                    />
                </ul>
                <ul className='cards__items'>
                    
                    <CardItem
                    src='/images/NN.png' 
                    label='Intermediate'
                    text='Neural Networks. Watch the first 3, rest optional (~1 hour)'
                    path='https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi'
                    />
                    <CardItem
                    src='/images/MLP.png' 
                    label='Intermediate'
                    text='MLP from scratch MOST IMPORTANT! (~2 hours)'
                    path='https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ&index=2'
                    />
                    <CardItem
                    src='/images/torch.png' 
                    label='Intermediate'
                    text='PyTorch (~30 mins)'
                    path='https://www.youtube.com/watch?v=tHL5STNJKag'
                    />
                </ul>
                <ul className='cards__items'>
                  <CardItem
                  src='/images/alexnet.png' 
                  label='For All'
                  text='How AlexNet revolutionized AI (~17 mins)'
                  path='https://www.youtube.com/watch?v=UZDiGooFs54'
                  />
                  <CardItem
                  src='/images/linalg.jpg' 
                  label='For All'
                  text='Optional: Linear Algebra (~1 hour)'
                  path='https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'
                  />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ResourceCards
