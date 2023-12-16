import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
    <hr />
    <div className='social-media'>
        <Link href="#">
        <FaFacebook size='1.5rem'/>
        </Link>
        <Link href="#">
        <FaTwitter size='1.5rem'/>
        </Link>
        <Link href="#">
        <FaInstagramSquare  size='1.5rem'/>
        </Link>
        <Link href="#">
        <SiGmail size='1.5rem' />
        </Link>
    </div>
    <div>
        <p>© 2021 CodeMap. All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer