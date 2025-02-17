"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
   Select, 
   SelectContent, 
   SelectGroup, 
   SelectItem, 
   SelectLabel,
   SelectTrigger,
   SelectValue,
  } from "@/components/ui/select";


  import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
   
  import { motion } from "framer-motion";
   const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "(+250) 781 719 914",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "ie.togetha@gmail.com",
    },
    {
      icon: <FaMapMarkedAlt/>,
      title: "Address",
      value: "Kigali, Rwanda",
    },
   ];

const Contact = () => {
  return (
    <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1,
          transition:{ delay: 2.4, duration: 0.4, ease: "easeIn"}
          }}
          className=" px-6 xl:px-12"
        >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[58%] order-2 x-order-none">
            <form className=" flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className=" text-4xl text-accent ">Let's work to gether</h3>
              <p className=" text-white/60 ">
              I believe in the importance of collaboration and teamwork. I'm excited 
              to connect with fellow developers, designers, and anyone who shares a passion 
              for web development. Let's exchange ideas, share experiences, 
              and work together to create exceptional online experiences.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email adress" />
                <Input type="phone" placeholder="Pone number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web-dev">Web Development</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="back-end">Back-end Development</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea placeholder="Message" className=" h-[150px]" />
              {/* button */}
              <Button className="md:max-w-40">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className=" flex-1 flex items-center order-1 xl:order-2 mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className=" flex items-center gap-6 mb-6">
                  <div className=" flex items-center justify-center w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-accent rounded-md bg-[#27272c]">
                    <div className=" flex items-center justify-center rounded-md">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white/60 ">{item.title}</h4>
                    <p className="text-xl text-white">{item.value}</p>
                  </div>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
