import React from 'react'
import './HomeFun.css'
import CardItem from './CardItem'

function HomeFun() {

  return (
    <div className = 'home-fun-cards'>
        <h1>Our Team</h1>
        <h2> Founders</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/arjun.jpg' 
                    label='Arjun Nair'
                    text="Arjun Nair is a junior at Andover High School. He has over 10 years of chess experience and has taught 125+ students both locally and internationally. He specializes in teaching young beginners and runs numerous volunteer chess programs."
                    path='mailto:arjun.nair610@gmail.com'
                    />
                    <CardItem
                    src='/images/victor.jpg' 
                    label='Victor Feng'
                    text='Victor Feng is a junior at Lexington High School. He captained LHS to first place at states in 2023 and 2025, top 10 chess teams in US High School Championships in 2023 and 2025, won US Amateurs Scholastics twice, and co-champed the 2025 Spiegel Cup.'
                    path='mailto:vfeng08@gmail.com'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/eric.jpg' 
                    label='Eric Feng'
                    text="Eric Feng is a sophomore at Acton Boxborough High School. He is the second most decorated chess player in Massachusetts History, winning the esteemed Spiegel Cup 5 times and winning US Amateurs Scholastics twice. "
                    path='mailto:eric.feng1003@gmail.com'
                    />
                    <CardItem
                    src='/images/raymond.png'
                    label='Raymond Xu'
                    text='Raymond Xu is a junior at Lexington High School. He won the 8th grade national champion in 2022, and has won multiple Spiegel cups at the youth level. He won the U.S. Amateur top scholastic award in 2023, and he has taught over 1000 hours of chess.'
                    path='mailto:rayxu66@gmail.com'
                    />
                </ul>
            </div>
        </div>
        <h2> Department Heads </h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src= '/images/chess_hero.webp' 
                    label= 'Ben Y'
                    text= "TO BE ADDED"
                    path= 'https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/images/ethanz.jpg' 
                    label='Ethan Zhou'
                    text="Ethan Zhou is a junior at Lexington High School. He is a model, actor, and social media influencer. He is responsible for all our social media engagement. If you are looking to collab, please email him!!!"
                    path='mailto:ethanzhou878@gmail.com'
                    />
                    <CardItem
                    src= '/images/dylan.png' 
                    label= 'Dylan Ho'
                    text= "TO BE ADDED"
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
                    src='/images/chris.jpg' 
                    label='Chris Wu'
                    text="TO BE ADDED"
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/images/shouri.jpg' 
                    label='Shouri Mosiliganti'
                    text="TO BE ADDED"
                    path='mailto:28stu521@lexingtonma.org'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default HomeFun;
