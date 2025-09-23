import React from 'react'
import './HomeFun.css'
import CardItem from './CardItem'

function HomeFun() {

  return (
    <div className = 'home-fun-cards'>
        <h1>Meet our team</h1>
        <h2> Founders</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/banana.png' 
                    label='Arjun Nair'
                    text=""
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/images/banana.png' 
                    label='Victor Fang'
                    text=''
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/banana.png' 
                    label='Ethan Fang'
                    text=""
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/images/banana.png'
                    label='Raymond Xu'
                    text=''
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                </ul>
            </div>
        </div>
        <h2> Department Heads </h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/banana.png' 
                    label='Ethan Zhou'
                    text=""
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src= '/images/banana.png' 
                    label= 'Dylan Ho'
                    text= ""
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src= '/images/banana.png' 
                    label= 'Ben Y'
                    text= ""
                    path= 'https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                </ul>
            </div>
        </div>
        <h2> Teachers </h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/banana.png' 
                    label='Chris Wu'
                    text=""
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/images/banana.png' 
                    label='Shouri Mosiliganti'
                    text=""
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default HomeFun;
