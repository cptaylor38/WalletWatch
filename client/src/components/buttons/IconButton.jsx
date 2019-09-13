import React from 'react';

const IconButton = ({ app }) => {
    const { img, href, color, txt, name } = app;

    return (
        <a href={href}
            className='btn login-btn'
            style={{ backgroundColor: color, margin: 5, display: 'block' }}
            title={txt}>
            <img src={img} alt='icon' className='btn-icon' />
            <span className='btn-text'>{name.toUpperCase()} Login</span>
        </a>
    )
}

export default IconButton;