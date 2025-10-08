import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Contacts</h2>
              <p>Arjun Nair: <a href="mailto:arjun.nair610@gmail.com">arjun.nair610@gmail.com</a></p>
              <p>Victor Feng: <a href="mailto:vfeng08@gmail.com">vfeng08@gmail.com</a></p>
              <p>Eric Feng: <a href="mailto:eric.feng1003@gmail.com">eric.feng1003@gmail.com</a></p>
              <p>Raymond Xu: <a href="mailto:rayxu66@gmail.com">rayxu66@gmail.com</a></p>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              {/* Instagram */}
              <a className='social-logo'
                  href='https://www.instagram.com/ai.chess.uni/'
                  target='_blank'
                  rel='noopener noreferrer'
              >
                <i className='fab fa-instagram'/>
              </a>
              {/* YouTube */}
              <a className='social-logo'
                  href='https://www.youtube.com/@AIChess-f1e'
                  target='_blank'
                  rel='noopener noreferrer'
              >
                <i className='fab fa-youtube'/>
              </a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Footer
