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

    // Get the current window width for conditional checks
    const getWindowWidth = () => window.innerWidth;
    const isMobile = () => getWindowWidth() <= 960;

    const handleHoverStart = () => {
        // 🛑 FIX: Only run video logic if NOT mobile
        if (!isMobile() && videoRef.current) {
            videoRef.current.classList.add('show');
            // Using a try/catch block for play() is good practice
            videoRef.current.play().catch(e => console.log("Video play error:", e));
        }
    };
    
    const handleHoverEnd = () => {
        // 🛑 FIX: Only run video logic if NOT mobile
        if (!isMobile() && videoRef.current) {
            videoRef.current.classList.remove('show');
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const showButton = () => {
        if(getWindowWidth() <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        // ... your code ...
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
            // 🛑 FIX: Use handlers that contain the mobile check
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}>
                <div className="logo-media-wrapper">
                    <img 
                    src='/images/first-frame.png' 
                    className="navbar-poster"
                    alt="Logo Poster"
                    />
                    {/* The video element is only included for desktop behavior */}
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
                {/* <li className='nav-item'>
                    <Link to='/projects' className='nav-links' onClick={(closeMobileMenu)}>
                        Courses
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/calendar' className='nav-links' onClick={(closeMobileMenu)}>
                        Teachers
                    </Link>
                </li> */}
                <li className='nav-item'>
                    <Link to='/resources' className='nav-links' onClick={(closeMobileMenu)}>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfChffJLyE9IO2ljUqGixPz1cMCDgYAgYtbeMRWQks1Th-yJA/viewform?usp=header' 
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
             to='https://docs.google.com/forms/d/e/1FAIpQLSfChffJLyE9IO2ljUqGixPz1cMCDgYAgYtbeMRWQks1Th-yJA/viewform?usp=header'>
                Join
            </Button>
            }
            </div>
        </nav>
    </>
  )
}

export default NavBar