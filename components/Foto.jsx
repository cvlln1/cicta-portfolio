"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Foto = () => {
  return ( <div className=" w-full h-full relative">
    <motion.div initial= {{opacity: 0}} animate={{
        opacity:1,
        transition: {delay:2.1, duration: 1, ease: "easeIn"},
        }}>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
        <img src="https://github.com/Yur1-a1.png" priority quality={100} alt="minha foto do gitHub" 
        className="rounded-full w-[298px] h-[298px] largaco:w-[450px] largaco:h-[450px] "/>
  
        </div>
    </motion.div>
  </div>
  );
}

export default Foto

