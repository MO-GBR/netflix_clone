import React from 'react'
import { MdOutlineMarkEmailRead } from "react-icons/md";

const list = ["Home", "TV Showes", "Recently Add", "My List"];

const Footer = () => {
  return (
    <footer className='footerContainer'>
        <div className='footer'>
            <div className='footer-container1'>
                <img src='logo.png' className='footer-logo' />
                <div className='footer-links'>
                    {
                        list.map((item, index) => (
                            <p key={index} className='footer-links-link'>{item}</p>
                        ))
                    }
                </div>
            </div>
            <div className='footer-container2'>
                <div className='footer-box'>
                    <h1 className='footer-text'>Subscribe</h1>
                    <div className='footer-inputContainer'>
                        <MdOutlineMarkEmailRead className='footer-inputIcon' />
                        <input
                            type="email"
                            placeholder="youremail@example.com"
                            className='footer-input'
                        />
                    </div>
                </div>
            </div>
        </div>
        <p className='footerRights'>Copyrights; 2025 @MO-GBR</p>
    </footer>
  )
}

export default Footer