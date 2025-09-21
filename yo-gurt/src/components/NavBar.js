import {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { Button } from './Button';

function NavBar() {
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const videoRef = useRef(null);

    const handleHoverStart = () => {
        if (videoRef.current) {
            videoRef.current.classList.add('show');
            videoRef.current.play().catch(e => console.log("Video error:", e));
        }
    };
    
    const handleHoverEnd = () => {
        if (videoRef.current) {
            videoRef.current.classList.remove('show');
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);
    window.addEventListener('resize', showButton);
  return (
    <>
     <nav className = "navbar">
        <div className = "navbar-container">
            <Link 
            to='/' 
            className="navbar-logo" 
            onClick={closeMobileMenu}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}>
                <div className="logo-media-wrapper">
                    <img 
                    src='/images/first-frame.png' 
                    className="navbar-poster"
                    alt="Logo Poster"
                    />
                    <video 
                    src='/images/logo.mov' 
                    className="navbar-video"
                    poster="/images/first-frame.png"
                    loop 
                    muted
                    preload="auto"
                    ref={videoRef}
                    />
                </div>
                AICHESS 
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/projects' className='nav-links' onClick={(closeMobileMenu)}>
                        Courses
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/calendar' className='nav-links' onClick={(closeMobileMenu)}>
                        Teachers
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/resources' className='nav-links' onClick={(closeMobileMenu)}>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSeXoTRbhvNvsAfxWUihoT3GBH-37amXsnO7RAGjDSaVUAZFLw/viewform?usp=header' 
                    className='nav-links-mobile' 
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={(closeMobileMenu)}>
                        Join!
                    </a>
                </li>
            </ul>
            {button && 
            <Button 
             buttonStyle='btn--empty'
             buttonSize='btn--large'
             to='https://docs.google.com/forms/d/e/1FAIpQLSeXoTRbhvNvsAfxWUihoT3GBH-37amXsnO7RAGjDSaVUAZFLw/viewform?usp=header'>
                Join
            </Button>
            }
            </div>
        </nav>
    </>
  )
}

export default NavBar
