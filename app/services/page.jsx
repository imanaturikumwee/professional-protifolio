"use client"

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services=[
  {
    num: '01',
    title: 'Front End Web Development',
    description: 
    'Working on the visual and interactive parts of a website using HTML, CSS, and JavaScript and other technologies .'
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 
    'designing the visual representation of a website with Figma and other technologies .'
  },
  {
    num: '03',
    title: 'Back End Web Development',
    description: 
    'Managing the server side, databases, and server logic with languages like Python, javaScript, and PHP.'
  },

]

const Services = () => {
  return (
    <section className=" min-h-[80vh] flex flex-col justify-center py-12 lg:py-20  xl:py-0 xl:px-12 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{opacity: 0}}
            animate={{
              opacity: 1,
              transition: {
                delay: 2.4,
                duration: 0.4,
                ease: "easeIn"
              }
              
            }}
            className=" grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {
              services.map((service, index)=>{
                return(
                  <div 
                    key={index}
                    className="flex-1 flex flex-col justify-center gap-6 group"
                  >
                    {/* top */}
                    <div className=" w-full flex justify-between items-center">
                      <div className=" text-5xl font-extrabold text-outline text-transparent
                       group-hover:text-outline-hover transition-all duration-500 ">
                          {service.num}
                        </div>
                      <Link 
                        href="" 
                        className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent
                         transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                         <BsArrowDownRight className=" text-primary text-3xl"/>
                      </Link>
                    </div>
                    {/* title */}
                    <h2 className="text-[20px] font-bold leading-none text-white
                     group-hover:text-accent transition-all duration-500">
                      {service.title}
                    </h2>
                    {/* description */}
                    <p className=" text-white/60"> 
                      {service.description} 
                    </p>
                    <div className=" border-b border-white/20 w-full"></div>
                  </div>
                )
              })
            }

          </motion.div>
        </div>
      
    </section>
  )
}

export default Services
