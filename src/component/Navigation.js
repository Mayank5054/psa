import {motion} from "framer-motion";
import { Logo } from "./logo";
import React from "react";
import {Link} from "react-router-dom";

function Navigation(){

    function active_option(obj){
        var select=document.getElementById(obj);
       var slider=document.getElementById("slider_moveable");
        console.log(select);
        var all=document.getElementsByClassName("menu_a");
        console.log(all);
        Array.from(all).forEach(
            (e)=>{console.log(e);
                e.style.color="#434343";
                e.style.fontFamily="josefin";
            }
            );
        select.style.color="rgb(239,191,57)";
        select.style.fontFamily="josefin_bold";
        switch(obj){
            case "menu_home":slider.style.marginLeft="11%";slider.style.width="10%";break;
            case "menu_service":slider.style.marginLeft="24.5%";slider.style.width="12%";break;
            case "menu_about":slider.style.marginLeft="57%";slider.style.width="10%";break;
            case "menu_project":slider.style.marginLeft="39.5%";slider.style.width="14%";break;
        }
        
    }
    return(
<motion.div className="nav_div DF AI JC"
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: 1
          }}
        >
          <div className='logo_div '>
            <div className='logo_div1'>
              <Logo></Logo>
            </div>
          </div>
          <div className='menu_div'>
            <div className='menu_content'>
              <div className="menu_content1">
                <div
                  className='menu_final_div'>
                  <motion.p className='menu_p' 
                  whileHover={{ y: -7 }}
                  onTap={(e)=>{active_option(e.target.id);}}
                  ><Link 
                  style={{color:"var(--primary-color)",fontFamily:"josefin_bold"}}
                  to="/home" className="menu_a" id="menu_home">Home</Link>
                  </motion.p>
                  <motion.p
                    whileHover={{ y: -7 }}
                    onTap={(e)=>{active_option(e.target.id);}}
                    className='menu_p'><Link to="/service" className="menu_a" id="menu_service">Service</Link>
                  </motion.p>
                  <motion.p
                    whileHover={{ y: -7 }}
                    onTap={(e)=>{active_option(e.target.id);}}
                    className='menu_p' ><Link to="/project" className="menu_a" id="menu_project">Project's</Link></motion.p>
                  <motion.p
                    whileHover={{ y: -7 }}
                    onTap={(e)=>{active_option(e.target.id);}}
                    className='menu_p' ><Link to="/about" className="menu_a" id="menu_about">About</Link></motion.p>
                </div>
              </div>
            </div>
            <div className='menu_slider'>
              <div className="menu_slider1" id="slider_moveable">

              </div>
            </div>
          </div>
          <div className='contact_div DF AI JC'>
            <div className="contact_div1">
                <Link to="/contact" id="menu_contact">
                <motion.button
              onHoverStart={e=>{e.target.style.background="var(--primary-color)";e.target.style.color="white";}}
              onHoverEnd={e=>{e.target.style.background="none";e.target.style.color="var(--primary-color)";}}
              whileHover={{scale:1.05}}
                className='contact_us_button'>
                Contact Us
              </motion.button>
                </Link>
              
            </div>
          </div>
        </motion.div>
    );
}


export default React.memo(Navigation);