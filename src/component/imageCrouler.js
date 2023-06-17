import img from "../images/house02.png";
import Arrow from "./Arrow";
import arrow_right from "../graphics/slider_right.svg";
import arrow_left from "../graphics/slider_left.svg";
import { motion, transform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Load from "./Load";
function ImageCrouler() {
    var [load,setLoad]=useState(true);
   
      useEffect(()=>{
        setInterval(()=>{
            handleCrouler("right");
               },5000);
        
      },[])
   
    var image = [10, 20, 30, 40];
    var image_src = ["https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        , "https://media.istockphoto.com/id/524085051/photo/beautiful-exterior-of-new-luxury-home-at-twilight.jpg?s=612x612&w=0&k=20&c=wPqEpJkL22wE3NHSCgdWXq2FC8a-KvSCpP7XRIZHuOU="]

    var house_names = ["The Lotus House", "The Campag House", "The Marvel House"]
    var info_animation = {
        initial: { y: "100%", opacity: 0 },
        animate: {
            y: "0%",
            opacity: 1,
            transition: {
                duration: 0.75,
                ease: "easeInOut",
            }
        },
        exit: {
            x: "-100%",
            // opacity: 0,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    }

    useEffect(() => {
        // var house_name=document.querySelector(".house_name > p");
        // var house_description=document.getElementById("house_description");
        // var home_page_image=document.getElementById("home_path_im");
        // house_name.innerHTML=house_names[0];
        // home_page_image.setAttribute("src",image_src[0]);
        
         
            

    });
    var current_active = 0;
    // var [current_active,setActive]=useState(1);

    function handleCrouler(a) {
       
        var home_page_image = document.getElementById("home_page_image");
        var ref = document.getElementById("arrow_left");
        var actives = document.getElementsByClassName("active_circle");
        var house_name = document.querySelector(".house_name > a > p");
        var h_name = document.getElementById("house_name");
        var house_description = document.getElementById("house_description");
        var arrow_big = document.getElementById("arrow_big_div");

        if(home_page_image!=null){
        home_page_image.style.opacity=0;}
        // set loading bar to true
         

        if (a == "right") {
            current_active = (current_active + 1) % (image_src.length);
            
            ref = document.getElementById("arrow_right");
        }
        else {
            var temp = current_active - 1;
            console.log("temp = ", temp);
            console.log(image_src.length);
            if (temp < 0) {
                current_active = image_src.length - 1;
                console.log("this");
            }
            else {
                current_active = temp;
            }

        }
        var selection = document.querySelector(".active_circle:nth-child(" + (current_active +1) + ")");
        console.log("current_active", current_active);
        // arrow button left and right add animation
        if(ref!=undefined){
            ref.style.animationName = "scaler";
            ref.style.animationDuration = "0.5s";
        }
       
        // arrow_big.style.opacity=0;
        // arrow_big.classList.remove("opac_anima");
        // arrow_big.style.opacity = 0;
        // opac of big arrow 0


        // arrow button left and right remove background and set border color
        Array.from(actives).forEach((e) => {
            console.log(e);
            e.style.background = "none";
            e.style.border = "1px solid #2E2E2E";
        })



        // set border color
        if(selection){
        selection.style.background = "var(--primary-color)";}

        // house name and descrp animation class add
        if(h_name){
        h_name.classList.add("moveLeft");
        house_description.classList.add("moveLeft");


        // load the image
        home_page_image.setAttribute("src", image_src[current_active]);
        home_page_image.onload=()=>{
             
            home_page_image.style.animationName="opac";
            home_page_image.style.animationDuration="1.5s";
            // arrow left and right animation over 
            setTimeout(() => {
               
               ref.style.animationName = "";
               house_name.innerHTML = house_names[current_active];
              
           }, 500)
           
           // arrow big opacity animation start and name and description animation over 
           setTimeout(() => {
               // arrow_big.classList.add("opac_anima");
               
               h_name.classList.remove("moveLeft");
               house_description.classList.remove("moveLeft");
               
              
           }, 1200)
           
           setTimeout(()=>{
            home_page_image.style.animationName="";
           },1500)
           // arrow big animation remove
           // setTimeout(() => {
           //     arrow_big.classList.remove("opac_anima");
           //     arrow_big.style.opacity = 1;
           // }, 2000)
           home_page_image.style.opacity=1;
                   }
        }

        
       

    }
    return (
        <>
        <img src={image_src[0]} style={{height:0,width:0,display:"none"}}></img>
        <img src={image_src[1]} style={{height:0,width:0,display:"none"}}></img>
        <img src={image_src[2]} style={{height:0,width:0,display:"none"}}></img>
      
        <motion.div className="crouler"
        initial={{x:"100%",opacity:0}}
        animate={{x:"0%",opacity:1}}
        transition={{duration:1,ease:"easeInOut"}}
        exit={{x:"-100%"}}
        // variants={info_animation}
        // initial="initial"
        // animate="animate"
        // exit="exit"
        // style={{
            
        // }}
        > 
        <div style={{height:"100%",width:"100%",background:"white"}}>

        

                        <div className="image_container DF AI JC">
                            <motion.img id="home_page_image" 
                            animate={{
                                opacity:1
                            }}
                            transition={{
                                duration:2
                            }}
                            exit={{
                                opacity:0
                            }}
                            src={image_src[0]} height="100%" width="100%">
                            </motion.img>
                            <div className="blurer">
                                <div className="info_div DF AI JC">
                                    <div className="house_div DF AI JC">
                                        <motion.div
                                            variants={info_animation}
                                            initial='initial'
                                            animate="animate"
                                            id="house_name"
                                            className="house_name">
                                                <Link to="/">
                                                <motion.p
                                            >{house_names[0]}</motion.p>
                                                </Link>
                                           
                                        </motion.div>
                                        <motion.div
                                            variants={info_animation}
                                            initial='initial'
                                            animate="animate"
                                            id="house_description"
                                            className="house_description">
                                            <p>The he holy name of lotus flower .The Rossophisticated house made on the theme of lotus and on the holy name of lotus flower .</p>
                                        </motion.div>
                                        {/* <div className="arrow_div" id="arrow_big_div">
                                            <Arrow></Arrow>
                                        </div> */}
                                    </div>
                                    <div className="image_slider">
                                        <div className="image_slider1">
                                            <motion.img
                                                whileHover={{ scale: 1.1 }}
                                                src={arrow_left}
                                                id="arrow_left"
                                                onClick={() => { handleCrouler("left") }}
                                                className="arrow_left"></motion.img>
                                            <div className="moving_circle">
                                                {
                                                    image_src.map((e) => {
                                                        return (
                                                            <div className="active_circle" id="active_circle">
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <motion.img
                                                whileHover={{ scale: 1.1 }}
                                                onClick={() => { handleCrouler("right") }}
                                                id="arrow_right"
                                                src={arrow_right} className="arrow_right"></motion.img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                        </div>
            
        </motion.div>
                                         
                                            </>
    );
}

export default ImageCrouler;
