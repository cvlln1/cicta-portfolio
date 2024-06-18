"use client";


// importando os ícones das linguagens e ferramentas
import { 
  FaHtml5,
  FaCss3,
  FaJs, 
  FaFigma,
  FaNodeJs,
  FaReact,
 } from "react-icons/fa";

 import { 
  SiTailwindcss,
  SiNextdotjs
 } from "react-icons/si";

import { Tabs, TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area"; 

import { motion } from "framer-motion";

//Dados sobre mim

const about = {
  title: "Sobre Mim",
  description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit eius quibusdam nemo, voluptatem sit reiciendis quod mollitia commodi maxime?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Yuri Ferreira Cavallini",
    },

    {
      fieldName: "Age",
      fieldValue: "19",
    },

    {
      fieldName: "Phone",
      fieldValue: "(17)98142-9334",
    },

    {
      fieldName: "Email",
      fieldValue: "Cavallini@alunos.utfpr.edu.br",
    },

   
    {
      fieldName: "Languages",
      fieldValue: "Português, English",
    },

  ],
};

//Educação

const education = {
  icon: '/assets/cap.svg',
  title:  "Minha educação",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit eius quibusdam nemo, voluptatem sit reiciendis quod mollitia commodi maxime?",
  items: [
    {
      Instituicao: "Etec Coronel Raphael Brandão",
      Curso: "Análise e desenvolvimento de sistemas integrado ao ensino médio",
      Periodo: "2020 - 2022"

    },
    {
      Instituicao: "Universidade Tecnológica Federal do Paraná - UTFPR",
      Curso: "Bacharelado em Ciência da Computação",
      Periodo: "2023 - 2027"
    },
  ],

};

//Habilidades

const skills = {
  title: "Minhas habilidades",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit eius quibusdam nemo, voluptatem sit reiciendis quod mollitia commodi maxime?",
  
  skillList: [
  {
    icon: <FaHtml5 />,
    name: "html 5",
    
  },

  {
    icon: <FaCss3 />,
    name: "css 3",
    
  },

  {
    icon: <FaJs />,
    name: "Javascript",
    
  },

  {
    icon: <FaReact />,
    name: "react.js",
    
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    
  },

  {
    icon: <SiTailwindcss/>,
    name: "Tailwindcss",
    
  },

  {
    icon: <FaFigma />,
    name: "Figma",
    
  },
  
  ],

};


     
const About = () => {
  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{opacity: 1, 
      transition: { delay:2.4, duration:0.4, ease: "easeIn"}
      }}
      className="min-h[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto mt-12">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="about"> Sobre mim </TabsTrigger>
              <TabsTrigger value="education"> Educação </TabsTrigger>
              <TabsTrigger value="skills"> Skills </TabsTrigger>
            </TabsList>

            {/* Conteúdo */}
            <div className="min-h-[70vh] w-full">
              {/* Sobre Mim */}
              <TabsContent value="about" className="w-full"> 
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w[620px mx-auto xl:mx-0">
                      {about.info.map((item, index) => (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className=" text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
              </TabsContent>



              {/* Educação */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}</p>
                  <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => {
                          return( 
                            <>
                            <li key={index} className=" bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center
                            items-center lg:items-start gap-1">
                              <span className="text-blue-500">{item.Periodo}</span>
                              <h3 className="text-lg max-sw-[260] min-h[60px] text-center lg:text-left">{item.Curso}</h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                                <p className="text-white/60 text-sm">{item.Instituicao}</p>
                              </div>
                            </li>
                            
                            </>
                          );
                        })}
                      </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Habilidades */}
              <TabsContent value="skills" className="w-full h-full"> 
                <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                          <h3 className="text-4xl font-bold">{skills.title}</h3>
                          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                        </div>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                          {skills.skillList.map((skill, index) => {
                            return(
                              <>
                              <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] flex rounded-xl flex justify-center items-center group">
                                      <div className="text-6xl group-hover:text-blue-500 trasition-all duration-300">
                                        {skill.icon}</div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>{skill.name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </li>
                              </>
                            );
                          })}
                        </ul>
                </div>
              </TabsContent>
            
            </div>
          </Tabs>
        </div>
    </motion.div>
  );
};

export default About