import im from "../graphics/logo.svg";
import { motion } from "framer-motion";
import { useEffect } from "react";
function Load(){
    
    return (
        <>
        <div className="load_div DF AI JC"
        style={{
            overflow:"hidden"
        }}
        >
        <motion.svg 

        style={{
            width:"10%",
            zIndex:1
        }}
    id="sv01"
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 796.23 240.5">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <motion.path 
              initial={{
                opacity:0,
                pathLength:0
              }}
              animate={{
                opacity:1,
                pathLength:1
              }}
              transition={{
                duration:3,
                repeat:Infinity,
                repeatType:"reverse",
                repeatDelay:2,
                ease:"easeInOut"
              }}
              className="logo_cls" d="M.5.5V80.27H56.92V54.73L170.28,55a21.39,21.39,0,0,1,12.38,10.28,20.65,20.65,0,0,1,2.11,11.55,21.1,21.1,0,0,1-5.62,13.59,20.44,20.44,0,0,1-8.87,5.43H.5V238.72H56.66l.26-88.5L176.15,150c3.87-.07,32.51-1.06,51.06-25,13.57-17.53,13.51-36.72,13.28-42.39.76-4.44,4.74-30.21-12.77-53.87C209.53,4.1,182.27.93,177.94.5Z"/>
              <motion.path 
              initial={{
                opacity:0,
                pathLength:0
              }}
              animate={{
                opacity:1,
                pathLength:1
              }}
              transition={{
                duration:3,
                
                repeat:Infinity,
                repeatType:"reverse",
                repeatDelay:2,
                ease:"easeInOut"
              }}
              className="logo_cls" d="M501.21.5V54.14H333.38a18.49,18.49,0,0,0-11.06,6.47c-3.61,4.56-3.69,9.59-3.75,12.93-.05,2.89-.13,8.06,2.89,12.26a17.53,17.53,0,0,0,13.62,6.81H440.27c3.75.25,33,2.71,50.39,28.25,12.85,18.91,11.2,38.74,10.55,44.26.48,3.79,3.46,31.26-17,53.1-18.07,19.27-41.47,20.38-46,20.5h-174V185.2L429,184.52c1.52-.2,11.64-1.7,16.34-10.21a18.38,18.38,0,0,0,2.17-7.1,21.11,21.11,0,0,0-16.81-20.14l-106.21-1c-6-.39-25.21-2.42-41.53-17.7-23-21.56-21.1-51.5-20.77-55.49-.21-5.12-.6-28.51,17-48.68C299.09,1.49,326.29.57,330.66.5Z"/>
              <motion.polygon 
              initial={{
                opacity:0,
                pathLength:0
              }}
              animate={{
                opacity:1,
                pathLength:1
              }}
              transition={{
                duration:3,
                repeat:Infinity,
                repeatType:"reverse",
                repeatDelay:2,
                ease:"easeInOut" 
              }}
              className="logo_cls" points="509.7 240 571.65 240 652.33 73.8 685.01 141.54 645.53 140.86 618.97 193.63 710.21 193.97 732.33 240 795.43 240 680.25 1.78 623.06 1.78 509.7 240"/>
              </g>
              </g>
              </motion.svg>
 <p 
 className="hold_text"
 style={{
    zIndex:1
 }}
 >Hold A Moment We Are Getting Things Ready For You . . .</p>

 <div className="mover">

 </div>
 {/* <div className="mover mover1">

</div>
<div className="mover mover2">

</div> */}
        </div>
        </>
    )
    }

    export default Load;