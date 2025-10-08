import React from 'react';
import './HomeProject.css';

function HomeProject() {
  return (
    <div className="home-section">

      <div className="home-section-container">
        <div className="home-section-images">
        <img src="/images/toughy.png" alt="Placeholder 1" />            
        <img src="/images/award.png" alt="Placeholder 2" />
        <img src="/images/tourney.png" alt="Placeholder 3" />

        </div>
        <div className="home-section-text">
          <p className="intro-text">
            AI CHESS is dedicated to helping young players enhance their chess skills through:
          </p>
          <ul className="intro-list">
            <li>Weekly lessons</li>
            <li>Camps</li>
            <li>Monthly free seminars</li>
          </ul>
          <p>
            Chess is more than just a game—it's a powerful tool for developing critical thinking, problem-solving, and decision-making skills in children. As they learn to anticipate their opponent’s moves, strategize several steps ahead, and adapt their plans, kids build mental discipline and patience. These skills transfer directly to schoolwork and everyday situations, helping them approach challenges with focus and resilience. Chess also encourages creativity and imagination, as there are countless ways to play and win.
          </p>
          <p>
            Beyond cognitive benefits, chess teaches valuable life lessons like sportsmanship, perseverance, and handling both success and failure with grace. It’s a game where everyone starts equal, and progress depends on effort and practice—instilling a strong work ethic early on. Whether played competitively or casually, chess provides a fun, engaging way for kids to grow intellectually and emotionally while connecting with others around the world.
          </p>
          <p>
            High schoolers with strong teaching experience and a track record of success—like winning numerous chess tournaments—can make a powerful impact through teaching. Their expertise allows them to break down complex concepts clearly, engaging better with students while sharing the same level of knowledge. By sharing their skills, they not only elevate others but also build a stronger, smarter community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeProject;
