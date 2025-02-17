import { motion } from "framer-motion";

// variants
const stairAnimation ={
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  }
}

// clculate the reverse index for stagged delay
const reverseIndex = (index)=>{
  const tatalSteps= 6 ;// number of steps
  return tatalSteps-index-1;
}

const Stairs = () => {
  return (
    <>
    {/* render 6 mation divs each represanting a step of stairs.
    each div will have the same animation defined by the stairsAnimation object. 
    the delay for each div is calculated  simatically base on its reverse index,
    creating a stagged effect with decreasing delay for subsequent step */}

    {
      [...Array(6)].map((_, index)=>{
        return(
                <motion.div 
                key={index} 
                variants={stairAnimation} 
                initial= "initial" 
                animate="animate"
                exit="exit" 
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: reverseIndex(index)*0.1
                }} 
                className=" h-full w-full bg-white relative"/>
              )
      })
    }
    </>
  )
}

export default Stairs
