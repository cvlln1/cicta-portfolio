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
            <Image src="/imagesz/Eutbsemfundo.png" priority quality={100} fill alt="eu" 
            className="object-contain rounded-full"/>
        </div>
    </motion.div>
  </div>
  );
}

export default Foto