import React from 'react';
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Miscoch IT Copyright © 2023 All rights reserverd</p>
      <p className="icons">
        <a href="/">
            <AiFillLinkedin />
        </a>
        <a href="/">
            <AiFillFacebook />
        </a>
        <a href="/">
            <AiFillInstagram />
        </a>
        <a href="/">
            <AiFillYoutube />
        </a>
          
      </p>
    </div>
  )
}

export default Footer