import ImageCrouler from "./imageCrouler";
import Service from "./Services";
import Vision from "./Vision";
import Projects from "./Projects";
import Rose from "./Rose";
import Fott from "./Fott";
import Contact from "./Contact";
import { useState,useEffect } from "react";
import Load from "./Load";
import { motion } from "framer-motion";
function Home(){
    
    var [count,setCount]=useState(0);
    var [len,setLen]=useState(0);
    var [load,setLoad]=useState(true);
    useEffect(()=>{
  

     if(document.readyState=="complete"){
        setLoad(false);
    console.log("content loaded Rose");
    }
    document.onreadystatechange=(e)=>{
        if(document.readyState=="complete"){
            setLoad(false);
        console.log("content loaded Rose");
        }
        

    }
    },[])
    useEffect(()=>{
        window.scrollTo(0,0);
        },[])
    return(
        <>
        {
            load==true
            ? <Load></Load>
            :
            (
            <>
            <motion.div
            initial={{x:"-100%",opacity:0}}
            animate={{x:"0%",opacity:1}}
            transition={{duration:0.5,ease:"linear"}}
            exit={{x:"-100%"}}
            >
            <ImageCrouler></ImageCrouler>
        <Service></Service>
        <Vision></Vision>
        <Fott></Fott>
            </motion.div>
      
        </>
        )
            }
        </>
    )
}
export default Home;