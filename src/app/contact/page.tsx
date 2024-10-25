"use client";
import React from "react";
import '/style/contact.css'
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

 export default function ContactPage() {

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <div className="contact-wrapper">
      <div className="contact-left" data-aos="fade-right"  data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
        
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description"> your feedback, questions, and suggestions are important to us. Whether you are looking for a specific book, need help with an order, or simply want to share your thoughts, we are here to assist you!</p>
        <h2 className="touch"> Get in Touch </h2>
        <p className="information"> <strong> Address: </strong> 123 Tech Avenue, Karachi, Pakistan  </p>
        <p className='information'> <strong>Phone:</strong> +92 321 654 9870 </p>
         <p className="information"> <strong> Email: </strong> tehreemmeo@gmail.com  </p>

         <h2 className="touch"> Follow Me </h2>

         <div className="follow">
                <Link
                  href="https://www.linkedin.com/in/tehreem-asghar-1003772b7/"
                  target="_blank"
                  className="linkdin"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://x.com/Tehreem1794730?t=IdwZfgI0lQAsXiPe7KfSJQ&s=08"
                  target="_blank"
                  className="twitter"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href="https://www.instagram.com/tehreem412?igsh=eGs4OWtsZ3Fwcnc2"
                  target="_blank"
                  className="insta"
                >
                  <FaInstagramSquare />
                </Link>
              </div>
      </div>

      <div className="contact-right" data-aos="fade-left"  data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
        <form className="contact-form"  method='post'>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="input-field message-field"
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
