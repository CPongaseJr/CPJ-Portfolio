import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlus,
    FaInstagram,
    FaGithub,
  } from 'react-icons/fa';

const Links = () => {
  return (
    <section id="links" className='md:sticky top-16 z-12 scroll-smooth'>
    <div className="mx-auto flex flex-wrap justify-center px-10 p-2 flex-col md:flex-row items-center">
        <div className='flex justify-between py-2'>
          <a href="https://www.facebook.com/jayrpongase/"><FaFacebookF className='mx-4 hover:scale-150 duration-300'/></a>
          <a href="https://twitter.com/PongaseJ"><FaTwitter className='mx-4 hover:scale-150 duration-300'/></a>
          <a href="mailto:catalinopongasejr@gmail.com"><FaGooglePlus className='mx-4 hover:scale-150 duration-300'/></a>
          <a href="https://www.instagram.com/jayr_jigjig/"><FaInstagram className='mx-4 hover:scale-150 duration-300'/></a>
          <a href="https://github.com/CPongaseJr"><FaGithub className='mx-4 hover:scale-150 duration-300'/></a>
        </div>
        </div>
      
    </section>
  );
}

export default Links;
