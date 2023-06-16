import React from "react";
import Typed from 'react-typed';
import Resume from '../assets/Catalino_Pongase_Jr_resume.pdf';
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlus,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';

export default function About() {
    return (
        <section id="/">
        <div className="mx-auto flex flex-wrap justify-center px-10 p-2 flex-col md:flex-row items-center">
        <div className='flex justify-between py-2'>
          <a href="https://www.facebook.com/jayrpongase/"><FaFacebookF className='mx-4 hover:scale-150 duration-300'/></a>
          <a href="https://twitter.com/PongaseJ"><FaTwitter className='mx-4 hover:scale-150 duration-300'/></a>
          <a href="mailto:catalinopongasejr@gmail.com"><FaGooglePlus className='mx-4 hover:scale-150 duration-300'/></a>
          <a href="https://www.instagram.com/jayr_jigjig/"><FaInstagram className='mx-4 hover:scale-150 duration-300'/></a>
          <a href="https://github.com/CPongaseJr"><FaGithub className='mx-4 hover:scale-150 duration-300'/></a>
        </div>
        </div>
          <div className="container mx-auto flex px-10 pb-2 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I am
                <Typed 
                className='text-green-500 md:text-3xl sm:text-4xl text-xxl font-bold md:pl-4 pl-2'
                strings={['Catalino', 'Pongase', 'Jr.']} 
                typeSpeed={100} 
                backSpeed={90} 
                loop 
                />
              </p>
              <h1 className="lg:inline-block title-font sm:text-3xl text-2xl mb-4 font-medium text-white">I love to build amazing
                apps.
              </h1>
              <p className="mb-8 leading-relaxed">
              Design, code, test, correct and document complex programs and program modifications from supplied specifications using agreed standards and tools, to achieve a well-engineered result. 
              Takes part in reviews of own work.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
               { /*<a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a> */}
                <a
                  href={Resume}
                  download="Catalino_Pongase_Jr_Resume"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-4 inline-flex text-white bg-gradient-to-r from-indigo-500 to-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Download Resume
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./jayr1.png"
              />
            </div>
          </div>
        </section>
);
}