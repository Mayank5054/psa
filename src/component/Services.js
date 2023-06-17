import { motion } from "framer-motion";
import { useEffect,useState } from "react";
import Load from "./Load";
function Service() {
    // var [load,setLoad]=useState(true);
    var  [intersect,setInter]=useState(true);
    var images = [
        "https://images.squarespace-cdn.com/content/v1/5adb89f2aa49a19e7960b934/1608602979923-6PW5561L0G0LZFUA6Z9Q/image-asset.jpeg",
        "https://architizer-prod.imgix.net/media/1478816125050b3e61143c340b12857d19b7a294dc563.jpg?fit=max&w=1140&q=60&auto=format&auto=compress&cs=strip&h=569",
        "https://4.imimg.com/data4/XY/ED/MY-27587645/layout-building-design-500x500.jpg",
        "https://flyingcdn-98ab332c.b-cdn.net/wp-content/uploads/2022/03/interior-designer-in-delhi.jpg"
    ];
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
         var div=document.querySelectorAll("#service_div");
         console.log("intersecting = ",intersect);
         div.forEach((e)=>{
            observer.observe(e);
           })


  },[])
    useEffect(()=>{
        // if(navigator.onLine){
        //     window.onload=()=>{
        //         console.log("content loaded 1")
        //         setLoad(()=>(false));
        //     }
        //     if(document.readyState=="complete"){
        //         setLoad(false);
        //     }
        // }
        // else{
        //     console.log("internet was not available");
        // }
      },[]);

    useEffect(() => {
        var selection = document.getElementById("service_architect");
        var img = document.getElementById("image_container");
        console.log(img);
        if(img){
        selection.style.marginLeft = "13%";
        selection.classList.add("services_animated");
        img.src = images[0];
        }
        // img.style.background="url('"+images[0]+"')";
        // img.style.backgroundSize="cover";

    })
    function changeService(self) {
        var img = document.getElementById("image_container");
        img.style.marginTop = "100%";
        img.style.transition = "0.5s";

        // img.style.backgroundSize="cover";
        setTimeout(() => {
            switch (self) {
                case "service_architect": img.setAttribute("src", images[0]); break;
                case "service_landscape": img.setAttribute("src", images[1]); break;
                case "service_planning": img.setAttribute("src", images[2]); break;
                case "service_interior": img.setAttribute("src", images[3]); break;
            }
            img.style.marginTop = "0%";

        }, 500)
        console.log(self);
        var selection = document.getElementById(self);
        var mandetpry = document.getElementsByClassName("services_common");
        console.log(mandetpry);
        Array.from(mandetpry).forEach((e) => {
            console.log(e);
            if (e.classList.item("services_animated")) {
                console.log("founded");
                e.style.marginLeft = "10%";
                e.classList.remove("services_animated");
            }
        })

        if (selection) {
            selection.style.marginLeft = "13%";
            selection.classList.add("services_animated");
        }
    }
    return (
        <>
            <img src={images[0]} style={{ height: 0, width: 0, display: "none" }}></img>
            <img src={images[1]} style={{ height: 0, width: 0, display: "none" }}></img>
            <img src={images[2]} style={{ height: 0, width: 0, display: "none" }}></img>
            <img src={images[3]} style={{ height: 0, width: 0, display: "none" }}></img>
           
           
            <motion.div className="services_div DF AI JC" id="service_div"
            initial={{x:"-100%",opacity:0}}
             animate={{x:"0%",opacity:1}}
             transition={{duration:1,ease:"easeInOut"}}
             exit={{x:"-100%"}}
            >
{
            intersect==true ? <p>not intersecting</p>:
                <motion.div className="services_container DF AI JC"
                initial={{y:"50%",opacity:0}}
             animate={{y:"0%",opacity:1}}
             transition={{duration:1,ease:"easeIn",when:"beforeChildren"}}
          
                >
                    <div className="services_title">
                        <motion.p
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1,}}
                        >Our Services</motion.p>
                    </div>
                    <div className="services_slider DF AI JC">
                        <div className="services_slider1">
                            <div className="services_slider2" id="image_container_services">
                                <motion.img
                                    initial={{ y: "-100%", opacity: 0 }}
                                    animate={{ y: "0%", opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    // exit={{y:"-100%"}}
                                    // src={images[0]} 
                                    className="image_container"
                                    id="image_container">
                                </motion.img>
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="services_list_div">
                                    <motion.p
                                        whileHover={{ y: "-5px" }}
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "0%" }}
                                        transition={{ duration: 1, delay: 1 }}
                                        id="service_architect"
                                        className="services_common"
                                        onClick={(e) => { changeService(e.target.id) }}
                                    >Architectural</motion.p>
                                    <motion.p
                                        whileHover={{ y: "-5px" }}
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "0%" }}
                                        transition={{ duration: 1, delay: 1.4 }}
                                        id="service_landscape"
                                        className="services_common"
                                        onClick={(e) => { changeService(e.target.id) }}
                                    >Landscape</motion.p>
                                    <motion.p
                                        whileHover={{ y: "-5px" }}
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "0%" }}
                                        transition={{ duration: 1, delay: 1.6 }}
                                        id="service_planning"
                                        className="services_common"
                                        onClick={(e) => { changeService(e.target.id) }}
                                    >Planning</motion.p>
                                    <motion.p
                                        whileHover={{ y: "-5px" }}
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "0%" }}
                                        transition={{ duration: 1, delay: 2 }}
                                        id="service_interior"
                                        className="services_common"
                                        onClick={(e) => { changeService(e.target.id) }}
                                    >Interior</motion.p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
}
            </motion.div>

        </>
    )
}

export default Service;