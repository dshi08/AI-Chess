import React, { useState } from 'react';
import './HomeFun.css';
import CardItem from './CardItem';

function HomeFun() {
  // State to track the label (name) of the currently expanded card
  const [expandedCard, setExpandedCard] = useState(null); 

  // Function to toggle the expanded state
  const handleCardClick = (label) => {
    // If the clicked card is already expanded, collapse it (set to null)
    // Otherwise, expand the clicked card
    setExpandedCard(prevLabel => (prevLabel === label ? null : label));
  };

  // Helper function to render a CardItem with necessary props and logic
  const renderCard = (props) => (
    <CardItem
      {...props}
      // Pass the click handler
      onClick={() => handleCardClick(props.label)}
      // Pass a boolean indicating if this card is currently expanded
      isExpanded={expandedCard === props.label}
    />
  );
  
  return (
    <div className='home-fun-cards'>
        <h1>Our Team</h1>
        <h2> Founders</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    {renderCard({
                        src:'/images/arjun.jpg', 
                        label:'Arjun Nair',
                        text:"Arjun Nair is a senior at Andover High School. He has over 10 years of chess experience and has taught 125+ students both locally and internationally. He specializes in teaching young beginners and runs numerous volunteer chess programs.",
                        path:'mailto:arjun.nair610@gmail.com'
                    })}
                    {renderCard({
                        src:'/images/victor.jpg', 
                        label:'Victor Feng',
                        text:'Victor Feng is a senior at Lexington High School. He captained LHS to first place at states in 2023 and 2025, top 10 chess teams in US High School Championships in 2023 and 2025, won US Amateurs Scholastics twice, and co-champed the 2025 Spiegel Cup.',
                        path:'mailto:vfeng08@gmail.com'
                    })}
                </ul>
                <ul className='cards__items'>
                    {renderCard({
                        src:'/images/eric.jpg', 
                        label:'Eric Feng',
                        text:"Eric Feng is a junior at Acton Boxborough High School. He is the second most decorated chess player in Massachusetts History, winning the esteemed Spiegel Cup 5 times and winning US Amateurs Scholastics twice. ",
                        path:'mailto:eric.feng1003@gmail.com'
                    })}
                    {renderCard({
                        src:'/images/raymond.png',
                        label:'Raymond Xu',
                        text:'Raymond Xu is a senior at Lexington High School. He won the 8th grade national champion in 2022, and has won multiple Spiegel cups at the youth level. He won the U.S. Amateur top scholastic award in 2023, and he has taught over 1000 hours of chess.',
                        path:'mailto:rayxu66@gmail.com'
                    })}
                </ul>
            </div>
        </div>
        <h2> Department Heads </h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    {renderCard({
                        src: '/images/ben.png', 
                        label: 'Ben Y',
                        text: "Benjamin Yin is a senior at Lexington High School with over a decade of chess experience, having competed in nearly 200 tournaments. His most notable achievements include winning two Ohio State Grade Level Championships and placing third at the 2020 Online Chess National Championship. Outside of chess, Ben enjoys speed typing and participating in competitive math.",
                        path: 'mailto:benyin0828@gmail.com'
                    })}
                    {renderCard({
                        src:'/images/ethanz.jpg', 
                        label:'Ethan Zhou',
                        text:"Ethan Zhou is a junior at Lexington High School. He is a model, actor, and social media influencer. He is responsible for all our social media engagement. If you are looking to collab, please email him!!!",
                        path:'mailto:ethanzhou878@gmail.com'
                    })}
                </ul>
                <ul className='cards__items'>
                    {renderCard({
                        src: '/images/dylan.png',
                        label: 'Dylan Ho',
                        text: " Dylan Ho is a senior at Andover High School. He is graphic designer social media influencer with more than a thousand followers. He attained thousands of views on posts and collaborated with other influencers. ",
                        path:'mailto:dillho1207@gmail.com'
                    })}
                    {renderCard({
                        src: '/images/david.png',
                        label: 'David Shi',
                        text: "David is a senior at Andover High School. He coded this website and works a lot with machine learning. Email him with reports of any technical bugs.",
                        path:'mailto:dshi2008mayo@gmail.com'
                    })}
                </ul>
            </div>
        </div>
        <h2> Teachers </h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    {renderCard({
                        src:'/images/chris.jpg', 
                        label:'Chris Wu',
                        text:" Christopher Wu is a senior at Andover High School. He has experience teaching students chess from elementary school students to college students. Chris’s strongest game mode is bullet where he’s rated 2280 on chess.com",
                        path:'chriswuchess@gmail.com'
                    })}
                    {renderCard({
                        src:'/images/aziz.png', 
                        label:'Aziz Bekanvarov',
                        text:"Aziz has been playing chess for 8+ years. He love teaching kids how to think during a game, spot tactics, and build confidence no matter if they are a beginner, already competing at tournaments or someone who plays chess just to enjoy it. He is really excited to meet new students and wants to enjoy teaching chess to everyone!",
                        path:'mailto:azizbekanvarov2010@gmail.com'
                    })}
                    {renderCard({
                        src:'/images/johnathon.png', 
                        label:'Johnathon Yu',
                        text:"Johnathon Yu is a junior at Chelmsford High School. He focuses primarily on creating statewide chess opportunities for students of all levels. He has over 5 years of chess experience, is a skilled and active tournament player with a solid, strategic style, and specializes in analyzing games and teaching fundamentals to help students improve.",
                        path:'mailto:azizbekanvarov2010@gmail.com'
                    })}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default HomeFun;