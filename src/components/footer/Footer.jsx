import React from 'react'
import './style.css'

const Footer = () => {
    const year = new Date().getFullYear();

    return <div id='footer'>{`Copyright © Upbeat Code ${year}`}</div>;
}

export default Footer