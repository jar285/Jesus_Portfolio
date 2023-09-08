import React from 'react'
import { Accordion } from "./Accordion"
import {inViewHandler} from "../animationHandler";
import {motion,useAnimation} from "framer-motion";
import {InView} from "react-intersection-observer";

export const Portfolio = () => {
  return (
    <div>
      <Accordion/>
    </div>
    
  );
};
