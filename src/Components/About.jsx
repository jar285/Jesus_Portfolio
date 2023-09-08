import React from 'react'

export const About = () => {
  return (
    <section id="about" className="section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="w-full xl:w-1/2 mx-auto"
            src="../../src/assets/img/skills/MyPhoto2.jpg"
            alt="Personal Photo"
          ></img>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full xl:w-1/2">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                Jesus R.
              </h2>
              <p className="mb-4 text-accent text-center sm:text-left">
                Web & System Informant
              </p>
              <div className="h-1 w-72 bg-fuchsia-500 mb-4 mx-auto sm:mx-0"/>
              <p className="mb-8 text-center sm:text-left">
                In my current role, I work as an accountant at Top Food Provisions
                and create personal project on my free time. Outside of work, I enjoy
                playing video games with my friends, working out, and making fun little
                projects with my cousin who is in the same field as me.
                <br />
                You can often find me tinkering with new programming language or exploring
                the outdoors with my friends, my dream is to one day make and maintain websites
                with my cousin, whom is a big inspiration and motivation of what I do right now. 
                I am always on the lookout for new challenges and opportunitites to learn and 
                grow, and I am excited to see where my passions take me next.
                </p>  
            </div>
            <a
              href="https://www.youtube.com/channel/UCJlKbVfZry7LJoh0FKtSbHA"
              target="_blank"
              rel="nooopener noreferrer"
            >
              <button className="btn btn-md w-[115px] bg-red-600 hover:bg-red-800">
                Youtube
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};
