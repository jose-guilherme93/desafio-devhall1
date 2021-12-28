import React from 'react';
import './Header.css'
import { AiOutlineInstagram,
        AiOutlineLinkedin,
        AiOutlineTwitter } from "react-icons/ai";

const Header = () => {
    return (
        <header>
            <nav>
                <span><a href="/">MeuFreela</a></span>
                <a href="/" className="link-icon">{AiOutlineLinkedin()}</a>
                <a href="/" className="insta-icon">{AiOutlineInstagram()}</a>
                <a href="/"className='tt-icon'>{AiOutlineTwitter()}</a>
            </nav>
        </header>
    )
}

export default Header;