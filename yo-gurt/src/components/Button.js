import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['btn--filled', 'btn--empty']
const SIZE = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    to,
    type = 'button',
    onClick,
    buttonStyle,
    buttonSize,
    className='',
    target,
    rel
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZE.includes(buttonSize)
    ? buttonSize : SIZE[0]

    const buttonClasses = `btn ${checkButtonStyle} ${checkButtonSize} ${className}`.trim();

    const isExternal = to && (to.startsWith('http://') || to.startsWith('https://'))

    if (to) {
        if (isExternal) {
            return (
                <a
                href={to}
                className="btn-mobile"
                target={target || '_blank'}
                rel={rel || 'noopener noreferrer'}>
                    <button
                    className={buttonClasses}
                    onClick={onClick}
                    type={type}>
                        {children}
                    </button>
                </a>
            );

        } else {
            return (
                <Link to={to} className="btn-mobile">
                    <button
                     className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                     onClick={onClick}
                     type={type}>
                        {children}
                    </button>
                </Link>
            );
        }
    } 
    return (
            <button 
            className={buttonClasses} 
            onClick={onClick} 
            type={type}>
                {children}
            </button>
    );
};
