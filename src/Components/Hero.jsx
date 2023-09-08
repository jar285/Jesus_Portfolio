import React from 'react'
import { Canvas } from "@react-three/fiber"
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import { ArrowSection } from "./ArrowSection";
import glasses from "../../src/assets/img/logos/glasses.svg";
import {inViewHandler} from "../animationHandler";
import {motion,useAnimation} from "framer-motion";
import {InView} from "react-intersection-observer";

export const Hero = () => {
  const animation = useAnimation();

  return (
    <InView onChange={(inView)=> inViewHandler(inView, animation)}>
    <section
      id="home"
      className="h-[100vh] bg-primary flex items-center w-full flex-col"
      >
        <div className="container mx-auto h-full flex justify-center">
          <motion.div className="content-wrapper flex items-center" inital={{ opacity:0, scale:0.5}} animate={animation}>
            <div className="flex">
              <div className="w-1 mr-8 md:h-72 bg-gradient-to-br from-violet-500 via-pink-500 to-red-500"/>
              <div className="flex flex-col items-center lg:items-start">
              <div className="text-content">
                <h1 className="text-4xl lg:text-5xl pb-4 font-bold">
                  Hey, I'm <span className="text-fuchsia-800">Jesus</span>
                </h1>
                <p className="pb-4 max-w-[480px] text-lg text-left">
                My name is Jesus Adonis Rosario Vargas, and I am a 
                university sophomore with a clear vision for my future 
                in the web and system informatics world. I was born 
                in Dominican Republic. I love to create personal projects 
                and make web pages with my cousin, I want to keep improving my 
                skills and develop new ones.
                </p>
                <img 
                  src={glasses}
                  alt="glasses"
                  className="h-16 hidden md:block lg:block"
                  />
              </div>
            </div>
             </div>
            
          </motion.div>
          <div className="w-1/3 h-full lg:block hidden relative">
            <Canvas className="absolute inset-0">
              <OrbitControls enableZoom={false}/>
              <ambientLight intensity={0.9}/>
              <directionalLight position={[3,2,1]}/>
              <Sphere args={[1,100,200]} scale={1}>
                <MeshDistortMaterial
                  color="#86198F"
                  attach="material"
                  distort={0.5}
                  speed={2}
                  />
              </Sphere>
            </Canvas>
          </div>
        </div>
        <div className="bg-primary flex items-center justify-center">
          <ArrowSection/>
        </div>
    </section> 
    </InView>
  );
};
