import { motion } from "framer-motion";
function Arrow({color}) {
    var arrow_animate={
        initial:{opacity:0},
        animate:{opacity:1,
            transition:{
                duration:1,
                delay:1
              }
        },
        
    }
    return (
        <motion.svg xmlns="http://www.w3.org/2000/svg" 
         variants={arrow_animate}
         initial="initial"
         animate="animate"
        style={{
            width:"10%"
        }}
        whileHover={{scale:1.05}}
        viewBox="0 0 114.68 17.65">
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <line stroke={color} className="svg-arrow" y1="8.49" x2="112" y2="8.49" />
                    <line stroke={color} className="svg-arrow" x1="113.5" y1="8.4" x2="104.95" y2="16.94" />
                    <line stroke={color} className="svg-arrow" x1="113.97" y1="9.25" x2="105.43" y2="0.71" />
                </g>
            </g>
        </motion.svg>
    );
}

export default Arrow;