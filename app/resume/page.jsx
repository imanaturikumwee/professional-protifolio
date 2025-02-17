"use client"

import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma,
  FaNodeJs 
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs} from "react-icons/si";
// about data
const about = {
  title: "About me",
  description: "Working on the visual and interactive parts of a website using HTML, CSS, and JavaScript and other technologies .",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Emmanuel.I"
    },
    {
      fieldName: "Phone",
      fieldValue: "+250 781 719 914"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years"
    },
    {
      fieldName: "Email",
      fieldValue: "ie.togetha@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Rwandan"
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "@emmanuelimanaturikumwe"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "languages",
      fieldValue: "English"
    },
  ]
};

// Experience data
const experience ={
  icon: '',
  title: "My experience",
  description: "Working on the visual and interactive parts of a website using HTML, CSS, and JavaScript and other technologies .",
  items: [
    {
      company: "Azubi Africa",
      position: "Front end developer",
      duration: "2023-2024"
    },
    {
      company: "Ministry of health of Rwanda",
      position: "Anesthetist",
      duration: "2022-2024"
    },
    
  ]
};
// Eduction data
const education ={
  icon: '',
  title: "My Education",
  description: "Working on the visual and interactive parts of a website using HTML, CSS, and JavaScript and other technologies .",
  items: [
    {
      institution: "University of the people",
      degree: "Bachelor of Computer science",
      duration: "2020-2025"
    },
    {
      institution: "University of Rwanda",
      degree: "Bachelor of science in anesthesia",
      duration: "2017-2022"
    },
    {
      institution: "Azubi Africa",
      degree: "Front-end bootcamp",
      duration: "2023-2024"
    },
    {
      institution: "FreeCodeCamp",
      degree: "front-end bootcamp",
      duration: "2023-2024"
    },
  ]
};

// skills data
const skills = {
  title: "My skills",
  description: "Working on the visual and interactive parts of a website using HTML, CSS, and JavaScript and other technologies .",
  skilllist: [
    {
      icon: <FaHtml5/>,
      name: " html"
    },
    {
      icon: <FaCss3/>,
      name: "css 3"
    },
    {
      icon: <FaJs/>,
      name: "javascript"
    },
    {
      icon: <FaReact/>,
      name: "react.js"
    },
    {
      icon: <FaFigma/>,
      name: "figma"
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css"
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js"
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
    initial = {{opacity: 0}} 
    animate = {{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto xl:px-12 px-6">
        <Tabs 
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className= " flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className=" min-h-[70vh] w-full ">
            {/* experience */}
            <TabsContent value="experience" className=" w-full">
              <div className=" flex flex-col gap-[30px] text-center xl:text-left " >
                <h3 className=" text-4xl font-bold" >{experience.title}</h3>
                <p className=" max-w-[600px] text-white/60 max-auto xl:mx-0 ">
                {experience.description}
                </p>
                <ScrollArea className=" h-[400px] ">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index)=>{
                      return (
                      <li key={index} className=" bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 " >
                        <span className="text-accent" >{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className=" w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className=" text-white/60 ">{item.company}</p>
                        </div>
                      </li>)
                    })}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education*/}
            <TabsContent value="education" className=" w-full">
            <div className=" flex flex-col gap-[30px] text-center xl:text-left " >
                <h3 className=" text-4xl font-bold" >{education.title}</h3>
                <p className=" max-w-[600px] text-white/60 max-auto xl:mx-0 ">
                {education.description}
                </p>
                <ScrollArea className=" h-[400px] ">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index)=>{
                      return (
                      <li key={index} className=" bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 " >
                        <span className="text-accent" >{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className=" w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className=" text-white/60 ">{item.institution}</p>
                        </div>
                      </li>)
                    })}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className=" w-full h-full">
               <div className=" flex flex-col gap-[30px] ">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold "> {skills.title} </h3>
                  <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0 " > {skills.description} </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 ">
                  {skills.skilllist.map((skill, index)=>{
                    return (
                      <li key="index">
                        <TooltipProvider delayDuration={100} >
                          <Tooltip>
                            <TooltipTrigger className=" w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className=" text-6xl group-hover:text-accent transition-all duration-300 " >
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className=" capitalize " >{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        </li>
                    )
                  })}
                </ul>
               </div>
            </TabsContent>
            {/* About me */}
            <TabsContent value="about" className=" w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl" >{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
