import ImageCrouler from "./imageCrouler";
import Service from "./Services";
import Vision from "./Vision";
import Projects from "./Projects";
import Rose from "./Rose";
import Fott from "./Fott";
import Contact from "./Contact";
import { useState,useEffect } from "react";
import Load from "./Load";
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
    return(
        <>
        {
            load==true
            ? <Load></Load>
            :
            (
            <>
        <ImageCrouler></ImageCrouler>
        <Service></Service>
        <Vision></Vision>
        <Fott></Fott>
        </>
        )
            }
        </>
    )
}
export default Home;