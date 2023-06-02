import { ArrowRightIcon } from "@heroicons/react/solid";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlus,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <p className="title-font font-medium text-white mb-4 md:mb-0">
              <a href="#about" 
                 className="text-green-500 ml-3 text-xl">
                Jayr
              </a>
            </p>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
              <a href="#projects" 
                 className="mr-5 hover:text-white">
                Past Work
              </a>
              <a href="#skills" 
                 className="mr-5 hover:text-white">
                Skills
              </a>
              <a href="#mydesigns" 
                 className="mr-5 hover:text-white">
                My Designs
              </a>
              <a href="#testimonials" 
                 className="mr-5 hover:text-white">
                Testimonials
              </a>
            </nav>

            <div className='flex justify-between py-2'>
              <a href="https://www.facebook.com/jayrpongase/"><FaFacebookF className='mx-4 hover:scale-150 duration-300'/></a>
              <a href="https://twitter.com/PongaseJ"><FaTwitter className='mx-4 hover:scale-150 duration-300'/></a>
              <a href="mailto:catalinopongasejr@gmail.com"><FaGooglePlus className='mx-4 hover:scale-150 duration-300'/></a>
              <a href="https://www.instagram.com/jayr_jigjig/"><FaInstagram className='mx-4 hover:scale-150 duration-300'/></a>
              <a href="https://github.com/CPongaseJr"><FaGithub className='mx-4 hover:scale-150 duration-300'/></a>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              Hire Me
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
        </header>
      );
}