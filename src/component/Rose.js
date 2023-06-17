import im from "../images/Rectangle 58.png";
import { useEffect, useState } from "react";
import Load from "./Load";
import { Link } from "react-router-dom";
import video_img from "../graphics/Play Button Circled.svg";
import img from "../images/house02.png";
import arrow_left from "../graphics/slider_left.svg";
import arrow_right from "../graphics/slider_right.svg"
import { motion } from "framer-motion";
import {Logo} from "./logo";
import Fott from "./Fott";
function Rose() {
    useEffect(()=>{
        var element = document.getElementById("selection_crouler");
        document.addEventListener("keypress",(e)=>{
            console.log("key pressend");
            if(e.keyCode==39){console.log("detected as right");upgrade_val("right")}
            else{console.log("detected as right");upgrade_val("right");}
            });
    },[])
   
var current_active=0;
var image_src = ["https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        , "https://media.istockphoto.com/id/524085051/photo/beautiful-exterior-of-new-luxury-home-at-twilight.jpg?s=612x612&w=0&k=20&c=wPqEpJkL22wE3NHSCgdWXq2FC8a-KvSCpP7XRIZHuOU="]
    

function upgrade_val(a){
    
    var home_page_image = document.getElementById("image_shower_img");
    var ref=document.getElementById("arrow_left");
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
        
    }
    console.log(current_active);
    home_page_image.setAttribute("src", image_src[current_active]);
    if(ref!=undefined){
        ref.style.animationName = "scaler";
        ref.style.animationDuration = "0.5s";
        setTimeout(() => {
            ref.style.animationName = "";
        }, 500)
    }

    

}
    function enableFull(e) {
        console.log("enabale full = ");
        console.log(e.target);
        var im_div=document.getElementById("image_shower_img");
        im_div.src=e.target.src;
        var element = document.getElementById("selection_crouler");
        console.log(document.fullscreenElement);
        element.requestFullscreen({
            navigationUI: "show"
        }).then((e) => { console.log(e); });
        element.style.display = "block";
    }
    function closeFullSc(){
        document.exitFullscreen().then(()=>{console.log("full screen mode exited");})
    }
    function setButtonAgain(){
        var ref=document.getElementById("arrow_left");
            ref.style.animationName = "scaler";
            ref.style.animationDuration = "0.5s";
            setTimeout(()=>{
                ref.style.animationName = "";
            },500);
        

    }
    window.addEventListener("fullscreenchange", (e) => {
        if (document.fullscreenElement == null) {
            e.target.style.display = "none";
        }

    })
    var current_active = 0;
    var [load, setLoad] = useState(true);
 
    useEffect(() => {

        // replace image on every 5 seconds
        // setInterval(()=>{
        //     console.log("current_active="+current_active);
        // handleCrouler();
        // },5000)
    }, [])
    useEffect(() => {
        if (navigator.onLine) {
            var img = document.querySelectorAll("img");
            console.log(img);
            img.forEach((e) => {
                e.onload = () => {
                    setCount((e) => (e + 1));
                }
            })
            // if(count==3){
            //     setLoad(false);
            // }
            // window.onload=()=>{
            //     console.log("content loaded 1")
            //     setLoad(()=>(false));
            // }
            // if(document.readyState=="complete"){
            //     setLoad(false);
            // }
        }
        else {
            console.log("internet was not available");
        }
    });

    var current_active=0;
    function handleCrouler() {
        var img=document.getElementById("image_project_data");
        var id=document.getElementById("current_active");
        if(img!=null){
        img.style.marginLeft="-100%";
        img.style.opacity=0;
        img.style.transition="2s";
       current_active=(current_active+1)%image_src.length;
       setTimeout(()=>{
        img.setAttribute("src",image_src[current_active]);
       },1000);
       setTimeout(()=>{
        img.style.marginLeft="30%";
        img.style.opacity=1;
       
        if(current_active==0){id.innerHTML="01"}
        else{
            id.innerHTML="0"+(image_src.length-current_active+1);
        }
       },2000)
    }
      
    }
    var [count,setCount]=useState(0);
    var [len,setLen]=useState(0);
    var [load,setLoad]=useState(true);
    useEffect(()=>{
setInterval(()=>{
handleCrouler();
},6000)
    },[])
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
    return (
        <>

            <img src={image_src[0]} style={{ height: 0, width: 0, display: "none" }}></img>
            <img src={image_src[1]} style={{ height: 0, width: 0, display: "none" }}></img>
            <img src={image_src[2]} style={{ height: 0, width: 0, display: "none" }}></img>
           
           {
            load==true ? <Load></Load>:
           
            <motion.div className="Common_House"
           initial={{x:"100%",opacity:0}}
            animate={{x:"0%",opacity:1}}
            transition={{duration:1,ease:"easeInOut"}}
            exit={{x:"-100%"}}
            >
               
                    <div className="Image_Slider"
                    initial={{x:"-100%",opacity:0}}
        animate={{x:"0%",opacity:1}}
        transition={{duration:1,ease:"easeInOut"}}
        exit={{x:"-100%"}}
                    >
                        <div className="Image_Slider1">
                            <img src={image_src[0]} id="image_project_data"></img>
                            <div className="blurer_Image_Slider1">
                                <div className="image_Description">
                                    <p>The Rouse</p>
                                    <p>House</p>
                                </div>
                                <div className="counter">
                                    <p id="current_active">01</p>
                                    <div></div>
                                    <p className="total">
                                        
                                        {"0"+image_src.length}
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                <div className="Video_div DF AI JC">
                    <div className="video_data DF AI JC">
                        <p>Watch Video <span>About This</span></p>
                        <span></span>

                    </div>
                    <div className="video_sign DF AI JC">
                        <Link to="/">
                            <motion.img 
                            whileHover={{
                                transform:"rotate(20deg)"
                            }}
                            src={video_img}></motion.img>
                        </Link>
                    </div>
                </div>
                <span className="empty_span"></span>
                <div className="Photo_presentation">
                    <div className="image_photo_presentation DF AI JC"

                    >
                        <p>Master Bedroom</p>
                        <img src={img}></img>
                    </div>
                    <div className="image_data_photo_presentation DF AI JC">
                        <div className="im01gh DF AI JC">
                            <div className="aabbcc">
                                <div></div>
                            </div>
                            <div className="aabbcc2 DF AI JC">
                                <p>The Well Architectured Design and Statified Data Oriented Air flow structure for better dynamic Air collinThe Well Architectured Design and Statified Data Oriented Air flow structure for better dynamic Air collingThe Well Architectured Design and Statified Data Oriented Air flow structure for better dynamic Air collingg</p>
                            </div>
                        </div>


                    </div>

                </div>
                <span style={{
                    height: "5vh",
                    width: "100vw"
                }}></span>
                <div className="Photo_presentation_right">
                    <div className="image_photo_presentation DF AI JC image_pp_right"

                    >
                        <p>Family Hall</p>
                        <img src={img}></img>
                    </div>
                    <div className="image_data_photo_presentation DF AI JC">
                        <div className="im01gh DF AI JC">
                            <div className="aabbcc aabbcc_right">
                                <div></div>
                            </div>
                            <div className="aabbcc2 DF AI JC aabbcc2_right">
                                <p>The Well Architectured Design and Statified Data Oriented Air flow structure for better dynamic Air collinThe Well Architectured Design and Statified Data Oriented Air flow structure for better dynamic Air collingThe Well Architectured Design and Statified Data Oriented Air flow structure for better dynamic Air collingg</p>
                            </div>
                        </div>


                    </div>

                </div>
                <div
                    className="Photo_gallery_div"
                >
                    <p>Photo Gallery</p>
                </div>
                <div className="gallery_display">
                    <div className="selection_crouler DF AI JC" id="selection_crouler">
                        <div className="control_bar">
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                src={arrow_left}
                                id="arrow_left"
                                onClick={() => { setButtonAgain();closeFullSc(); }}
                                className="arrow_left"></motion.img>
                            <p>Go Back To Site</p>
                            <p id="note">use Left Right Arrow to change Image</p>
                        </div>
                        <div className="image_shower">
                            <img src={img} id="image_shower_img"></img>
                        </div>
                        <div className="image_controller">
                        {/* <motion.img
                                whileHover={{ scale: 1.1 }}
                                src={arrow_left}
                                id="arrow_left"
                                onClick={() => { upgrade_val("left"); }}
                                className="arrow_left"></motion.img> */}
                                <Logo></Logo>
                                {/* <motion.img
                                whileHover={{ scale: 1.1 }}
                                src={arrow_right}
                                id="arrow_left"
                                onClick={() => { upgrade_val("right") }}
                                className="arrow_left"></motion.img> */}

                        </div>

                    </div>
                    <div className="stats">
                        <div className="stats_container DF AI JC">
                            <p className="title_stats">About Rose House</p>
                            <div className="Describe">
                                <p className="Description_of_house">
                                    The philosophy of the schools challenges the notion of a big school community by breaking it into 3 smaller families, meant to be governed by the head of each.
                                </p>
                                <p className="Description_of_house">
                                    The philosophy of the schools challenges the notion of a big school community by breaking it into 3 smaller families, meant to be governed by the head of each.
                                </p>
                                <p className="Description_of_house">
                                    The philosophy of the schools challenges the notion of a big school community by breaking it into 3 smaller families, meant to be governed by the head of each.
                                </p>
                                <div className="stats_div">
                                    <p className="property_name">
                                        Location
                                    </p>
                                    <p className="property_value">
                                        Surat , Gujarat
                                    </p>
                                    <p className="property_name">
                                        Bedrooms
                                    </p>
                                    <p className="property_value">
                                        04
                                    </p>
                                    <p className="property_name">
                                        Floor Area
                                    </p>
                                    <p className="property_value">
                                        27,000 sq feet
                                    </p>
                                    <p className="property_name">
                                        Built Area
                                    </p>
                                    <p className="property_value">
                                        2.7 Lakh sq feet
                                    </p>
                                    <p className="property_name">
                                        Tentative Costing
                                    </p>
                                    <p className="property_value">
                                        18 Lakh
                                    </p>
                                    <p className="property_name">
                                        Actual Cost
                                    </p>
                                    <p className="property_value">
                                        15.42 Lakh
                                    </p>
                                    <p className="property_name">
                                        Actual Cost
                                    </p>
                                    <p className="property_value">
                                        15.42 Lakh
                                    </p>
                                    <p className="property_name">
                                        Actual Cost
                                    </p>
                                    <p className="property_value">
                                        15.42 Lakh
                                    </p>
                                    <p className="property_name">
                                        Actual Cost
                                    </p>
                                    <p className="property_value">
                                        15.42 Lakh
                                    </p>



                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="gallery">
                        <div className="gallery_container ">
                            <div className="gallery_image_div" data-count="1"
                                onClick={enableFull}
                            >
                                <img src={img}></img>
                            </div>

                            <div className="gallery_image_div" data-count="2"
                            onClick={enableFull}
                            >
                                <img src={image_src[0]}></img>
                            </div>
                            <div className="gallery_image_div" data-count="3"
                            onClick={enableFull}
                            >
                                <img src={image_src[1]}></img>
                            </div>
                            <div className="gallery_image_div" data-count="4"
                            onClick={enableFull}
                            >
                                <img src={image_src[2]}></img>
                            </div>





                        </div>
                    </div>
                </div>
                <div className="detail_description_div">
                    <div className="detail_description_title">
                        <p>Detail Description</p>
                        <div></div>
                    </div>
                    <div className="project_description">
                        <p>
                            The The school is made intimate by making 3 independent school clusters with one section for each grade, along with their own creative labs.philosophy of the schools challenges the notion of a big school community by breaking it into 3 smaller families, meant to be governed by the head of each.
                        </p>

                        <p>
                            The The school is made intimate by making 3 independent school clusters with one section for each grade, along with their own creative labs.philosophy of the schools challenges the notion of a big school community by breaking it into 3 smaller families, meant to be governed by the head of each.
                        </p>
                        <p>
                            The The school is made intimate by making 3 independent school clusters with one section for each grade, along with their own creative labs.philosophy of the schools challenges the notion of a big school community by breaking it into 3 smaller families, meant to be governed by the head of each.
                        </p>
                    </div>

                </div>
                <Fott></Fott>
            </motion.div>
}
        </>
    )
}
export default Rose;