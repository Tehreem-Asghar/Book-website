// 'use client'
// import React, { useEffect } from 'react';
import '../../../style/about.css'; 
// import AOS from 'aos'; 
// import 'aos/dist/aos.css';

export default function About() {  // Change the function name to 'Page'

  // useEffect(() => {
  //   AOS.init();  // Initialize AOS for scroll animations
  // }, []);

  return (
    <main >
      <section>
        <h1 className='about'>About Us</h1>
        <p>Welcome to <strong>CodeBooks</strong>  Your Ultimate Resource for Coding Mastery!</p>
        <p>At <strong>CodeBooks</strong>, we are dedicated to helping developers and tech enthusiasts at every stage of their coding journey. Whether you are just starting out or looking to sharpen your skills, our carefully curated selection of coding books is here to guide you.</p>
      </section>

      <section >
        <h2 className='secondHeading'>Our Mission</h2>
        <p>
          Our mission is simple  to provide the best learning resources in programming and help coders around the world achieve their goals. From beginner-friendly guides to advanced technical deep-dives, our collection covers a wide range of topics, including:
        </p>
        <ul >
          <li>JavaScript, TypeScript, and Web Development</li>
          <li>Frontend and Backend Frameworks like React, Next.js, and Node.js</li>
          <li>Software Engineering Best Practices</li>
          <li>Data Structures, Algorithms, and Problem Solving</li>
          <li>Version Control with Git and GitHub</li>
          <li>And much more!</li>
        </ul>
      </section>

      <section >
        <h2 className='secondHeading' >Why Choose Us?</h2>
        <p     >We understand the challenges that come with learning to code, which is why we aim to make high-quality resources accessible to everyone. Each book in our collection has been carefully selected for its clarity, practical approach, and expert insights. Whether you are a self-taught programmer or pursuing formal education, you will find resources here that suit your learning style.</p>
       </section>

      <section>
        <h2  className='secondHeading'>Stay Updated</h2>
        <p>We regularly update our collection with the latest trends and technologies in the programming world. Keep exploring and discover new ways to enhance your coding skills and stay ahead in the tech industry.</p>
      </section>
    </main>
  );
}

