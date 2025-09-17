import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Contacts</h2>
              <p>David Shi(President): <a href="mailto:dshi2026@student.andoverma.us">dshi2026@student.andoverma.us</a></p>
              <p>Will Lau(Vice President): <a href="mailto:wlau2026@student.andoverma.us">wlau2026@student.andoverma.us</a></p>
              <p>Dylan Ho(Socials Manager): <a href="mailto:dho2026@student.andoverma.us">dho2026@student.andoverma.us</a></p>
              <p>Dr. Bezaire(Club Advisor): <a href="mailto:marianne.bezaire@andoverma.us">marianne.bezaire@andoverma.us</a></p>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <a className='social-logo'
                  href='https://www.instagram.com/ahs.mlclub/'
                  target='_blank'
                  rel='noopener noreferrer'
              >
                <i className='fab fa-instagram'/>
              </a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Footer
