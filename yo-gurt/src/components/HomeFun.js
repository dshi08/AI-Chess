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
                    label='Club President'
                    text="I'm David, a senior at AHS. My favorite past times include doomscrolling and bedrotting! "
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/videos/trimmed.gif' 
                    label='Vice President'
                    text='SEEKING VP'
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/videos/trimmed.gif' 
                    label='Vice President'
                    text='SEEKING VP'
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                </ul>
                
                <ul className='cards__items'>
                    <CardItem
                    src='/videos/trimmed.gif' 
                    label='Vice President'
                    text='SEEKING VP'
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/videos/trimmed.gif' 
                    label='Social Media Manager'
                    text='SEEKING SOCIAL MEDIA MANAGER'
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/videos/trimmed.gif' 
                    label='Vice President'
                    text='SEEKING VP'
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/videos/trimmed.gif' 
                    label='Vice President'
                    text='SEEKING VP'
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                </ul>
            </div>
        </div>
        <h2> Department head </h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/banana.png' 
                    label='Club President'
                    text="I'm David, a senior at AHS. My favorite past times include doomscrolling and bedrotting! "
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='/videos/trimmed.gif' 
                    label='Vice President'
                    text='SEEKING VP'
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/videos/trimmed.gif' 
                    label='Social Media Manager'
                    text='SEEKING SOCIAL MEDIA MANAGER'
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
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
                    label='Club President'
                    text="I'm David, a senior at AHS. My favorite past times include doomscrolling and bedrotting! "
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/banana.png' 
                    label='Club President'
                    text="I'm David, a senior at AHS. My favorite past times include doomscrolling and bedrotting! "
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='/videos/trimmed.gif' 
                    label='Vice President'
                    text='SEEKING VP'
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/videos/trimmed.gif' 
                    label='Social Media Manager'
                    text='SEEKING SOCIAL MEDIA MANAGER'
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default HomeFun;
