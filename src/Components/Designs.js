
import { CodeIcon, ChevronDoubleRightIcon } from "@heroicons/react/solid";
import React from "react";
import { mydesigns } from "../data";

export default function MyDesigns() {
    return (
        <section id="mydesigns" className="text-gray-400 bg-gray-900 body-font">
          <div className="bg-gradient-to-r from-indigo-500 to-green-500 container px-5 py-10 text-center lg:px-40 mx-auto">
            <div className="flex flex-col w-full mb-20">
              <CodeIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                My Designs
              </h1>
              <p className="text-black lg:w-2/3 mx-auto leading-relaxed text-base">
                Take a glimps of some of my designs. Understanding of development lifecycle, including working experience with Git/GitFlow, Pull Requests and Code Reviews.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {mydesigns.map((mydesigns) => (
                <a
                  href={mydesigns.link}
                  key={mydesigns.image}
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={mydesigns.image}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {mydesigns.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {mydesigns.title}
                      </h1>
                      <p className="leading-relaxed">{mydesigns.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex justify-center">
                <a
                  href="#moreDesigns" className="inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                  See more 
                  <ChevronDoubleRightIcon className="w-4 h-4 ml-1" />
                </a>
                </div>
          </div>
        </section>
      );
}