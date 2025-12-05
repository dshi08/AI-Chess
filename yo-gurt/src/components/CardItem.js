import React, { useEffect } from 'react';
import { MdEmail } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CardItem(props) {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    // Destructure the props, including the new ones
    const { src, label, text, path, onClick, isExpanded } = props;

    // Use a class to conditionally apply the expanded CSS
    const cardLinkClasses = `cards__item__link ${isExpanded ? 'expanded' : ''}`;
    
    // The main link (<a>) is replaced with a div to handle the expand/collapse click
    return (
        // 1. Attach the click handler to the main list item
        <li className='cards__item' data-aos="fade-up" onClick={onClick}> 
            <div className={cardLinkClasses}>
                <figure className='cards__item__pic-wrap' data-category={label}>
                    <img src={src} alt={label} className='cards__item__img' />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>
                        {text}
                    </h5>
                    
                    {/* 2. Mailto link is moved to a separate clickable icon */}
                    <div style={{ textAlign: 'center', marginTop: '8px'}}>
                        <a
                            href={path}
                            className='card__email__link'
                            target="_blank"
                            rel="noopener noreferrer"
                            // Stop the click from toggling the card state
                            onClick={(e) => e.stopPropagation()} 
                            title={`Email ${label}`}
                        >
                            <MdEmail size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default CardItem;