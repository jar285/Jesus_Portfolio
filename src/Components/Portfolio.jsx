import React from 'react'
import { Accordion } from "./Accordion"
import {inViewHandler} from "../animationHandler";
import {motion,useAnimation} from "framer-motion";
import {InView} from "react-intersection-observer";

export const Portfolio = () => {
  const animation = useAnimation();
  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section id="portfolio" className="section bg-primary min-h-[600px]">
        <div className="container mx-auto">
          <motion.div className="flex flex-col items-center text-center" 
          initial={{opacity:0, scale: 0.5}} 
          animate={animation}
          >
            <h2 className="section-title">My latest work</h2>
            <p className="subtitle">
              Following is a short description of my skills
            </p>
          </motion.div>
        <Accordion/>
        </div>
      </section>
    </InView>
    
  );
};
