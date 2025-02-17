"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "./page.css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
  Tooltip,
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@radix-ui/react-tooltip';

import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    num: "01",
    category: "front-end",
    title: "Ecommerce",
    description: " An e-commerce projct about headphones and airbuds as well as speakers",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Tailwind.css" }
    ],
    image: "/assets/work/ecommerce.final.png",
    live: "https://ietogether-ecommerce.vercel.app/",
    github: "https://github.com/imanaturikumwee/ietogether",
  },
  {
    num: "02",
    category: "front-end",
    title: "Geopolitics",
    description: " An interface projct about countries and details about population geografical locations, regions, languages, and many more about countries and regions in the world.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Tailwind.css" }
    ],
    image: "/assets/work/geopolitics.png",
    live: "https://ietogether-countries.vercel.app/",
    github: "https://github.com/imanaturikumwee/countries",
  },
  {
    num: "03",
    category: "front-end",
    title: "potifolio",
    description: "This project show case my education, skill, experience and the projects that i va done so far",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Next.js" }
    ],
    image: "/assets/work/protifolio1.0.png",
    live: "https://ietogether-profile.vercel.app/",
    github: "https://github.com/imanaturikumwee/profile/",
  },
  {
    num: "04",
    category: "front-end",
    title: "My fist protifolio",
    description: "This project show case my education, skill, experience and the projects i did as a freshman",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
    ],
    image: "/assets/work/profile-in-courage.png",
    live: "https://ie-together.vercel.app",
    github: "https://github.com/imanaturikumwee/ietogether/",
  },
]

const Work = () => {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project data based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,
      transition:{ delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="min-h-[80vh] flex flex-col justify-center px-6 py-12 xl:px-12"
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline number */}
              <div className='text-5xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* project category */}
              <h2 className='text-[42px] font-bold text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
              {/* stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className='border border-white/20'></div>
              {/* buttons */}
              <div className='flex items-center gap-4'>
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12 '
              onSlideChange={handleSlideChange}
              navigation
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full '>
                    <div className='relative h-[460px] group flex justify-center items-center bg-pink-50/20 rounded-xl'>
                      {/* overlayer */}
                      <div className=' absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      {/* image */}
                      <div className='relative w-full h-full'>
                        <Image 
                          src={project.image}
                          alt={project.title}
                          layout='fill'
                          objectFit='cover'
                          className='rounded-xl'
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;
