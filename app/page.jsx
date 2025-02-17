import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import {FiDownload} from 'react-icons/fi'

const Home = () => {
  return (
    <section>
      <div className=" container mx-auto h-full px-6 xl:px-12">
        <div className=" flex flex-col lg:flex-row items-center justify-between lg:pt-4 lg:pb-24">
          {/* text */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <div className="text-xl mb-9">Software developer</div>
            <h1 className="h3">
              Hello, I'm <br />
              <span className="text-accent">
                Emmanuel, I
              </span>
            </h1>
            <p className="  max-w-[500px] mb-9 text-white/90">
              I excel at crafting elegant digital experience and i am 
              proficient in various programming languages and technologies
            </p>
            {/* button and socials */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button variant='outline' size="lg" className=" uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className=" text-xl"/>
              </Button>
              <div className="mb-4">
                <Socials 
                containerStyles="flex gap-6" 
                iconStyles=" w-9 h-9 border border-accent rounded-full flex
                justify-center items-center text-accent text-base hover:bg-accent
                hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className=" order-1 lg:order-none mb-10 lg:mb-0  ">
             <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home


