import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import '../../style/footer.css'

function Footer() {
  return (
    <main className='footer'>
        <section> 
        <h1>Back To Top</h1>
        </section>
        <section className='navigation'>
            <Link href={'/'}> Home</Link>
            <Link href={'/books'}> Books</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
        </section>
        <section>
            <p className='codebook'>© 2024 Bookstore. All rights reserved. </p>
            <p> Privacy Policy | Terms & Conditions </p>
        </section>
        <section>
            <h2>Follow Us:</h2>
            <div className='follow'>
            <Link
                  href="https://www.linkedin.com/in/tehreem-asghar-1003772b7/"
                  target="_blank"
                  className="linkdin"
                >
                  <FaLinkedin  className='size'/>
                </Link>
                <Link
                  href="https://x.com/Tehreem1794730?t=IdwZfgI0lQAsXiPe7KfSJQ&s=08"
                  target="_blank"
                  className="twitter"
                >
                  <FaXTwitter className='size'/>
                </Link>
                <Link
                  href="https://www.instagram.com/tehreem412?igsh=eGs4OWtsZ3Fwcnc2"
                  target="_blank"
                  className="insta"
                >
                  <FaInstagramSquare className='size'/>
                </Link>
            </div>
        </section>
    </main>
  )
}

export default Footer
