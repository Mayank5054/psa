import im from "../images/house02.png";
import Arrow from "./Arrow";
import polygon from "../graphics/polygon.svg";
import { motion } from "framer-motion";
import { useEffect,useState } from "react";
function Vision() {
    var  [intersect,setInter]=useState(true);
var springy={
    initial:{
        y:"200%"
    },
    animate:{
        y:"0%",
        transition:{
            duration:1,
            delay:3,
            type:"spring",
            stiffness:200
        }
    },
    
}
useEffect(()=>{
    var config={
        rootMargin:"0px 0px 0px 0px",
        threshold:0.2
      }
    var observer=new IntersectionObserver((e,self)=>{
        console.log("inside observer");
        console.log(e);
        e.forEach((e)=>{
          if(e.intersectionRatio > 0.20){
            setInter(false);
            console.log(e);
            self.unobserve(e.target);
          }
          else{
            console.log("not intersecting");
            console.log(e);
          }
        })
         },config);
         var div=document.querySelectorAll(".vision_div");
         console.log("intersecting vision= ",intersect);
         div.forEach((e)=>{
            observer.observe(e);
           })


  },[])

    return (
        <>
            <motion.div className="vision_div"
           initial={{x:"100%",opacity:0}}
            animate={{x:"0%",opacity:1}}
            transition={{duration:1,ease:"easeInOut"}}
            exit={{x:"-100%"}}
            style={{
                overflow:"hidden"
            }}
            >
                {intersect==true ? <p>not intersecting</p> :
                <motion.div 
                className="vision_div1" id="vision_div1"
                initial={{y:"100%",opacity:0}}
             animate={{y:"0%",opacity:1}}
             transition={{duration:2,ease:"easeIn",when:"beforeChildren"}}
                >
                    <div className="vision_img_div" id="vision_image_div">
                        <img src={im}></img>
                        <div className="vision_gradient DF AI JC">
                            <motion.div className="vision_title"
                            initial={{x:"-100%"}}
                            animate={{x:"0%"}}
                            transition={{duration:1,type:"spring"}}
                            >
                                <p>Our Vision</p>
                            </motion.div>
                            <div className="vision_content DF AI">
                                <motion.p
                                initial={{x:"-150%"}}
                                animate={{x:"0%"}}
                                transition={{duration:1,delay:1}}
                                >
                                    PS Architet was founded in order to provide services in Architecture Interior designing and landscape structure . our team provides an hands on service to fulfill the client request and needs .
                                     </motion.p>
                                <motion.p
                                initial={{x:"-150%"}}
                                animate={{x:"0%"}}
                                transition={{duration:1,delay:2}}
                                >Contact Us for Any Architectural Services</motion.p>
                                <motion.div className="contact_us_arrow"
                                 initial={{x:"-150%"}}
                                 animate={{x:"0%"}}
                                 transition={{duration:1,delay:3,type:"spring"}}
                                >
                                    <Arrow color="#EFBF39"></Arrow>
                                </motion.div>
                            </div>
                            <div className="states_div">
                                <motion.div className="state_projects state_common"
                              variants={springy}
                              initial="initial"
                              animate="animate"
                                >
                                    <img src={polygon}></img>
                                    <motion.p
                                    
                                    >Project 's</motion.p>
                                    <p className="data">70</p>
                                </motion.div>
                                <motion.div className="state_service state_common"
                                 variants={springy}
                                 initial="initial"
                                 animate="animate"
                                >
                                    <img src={polygon}>
                                    </img>
                                    <p>In Service</p>
                                    <p className="data">3y</p>
                                </motion.div>
                                <motion.div className="state_in_states state_common"
                                variants={springy}
                                initial="initial"
                                animate="animate"
                                >
                                    <img src={polygon}></img>
                                    <p>In States</p>
                                    <p className="data">04</p>
                                </motion.div>
                                <motion.div className="state_cost state_common"
                                variants={springy}
                                initial="initial"
                                animate="animate"
                                >
                                    <img src={polygon}></img>
                                    <p>Average Cost</p>
                                    <p className="data special_data"
                                        style={{
                                            fontSize: "20px !important"
                                        }}
                                    >7.2 L</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
}
            </motion.div>
        </>
    );
}

export default Vision;