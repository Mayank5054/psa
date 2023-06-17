import { motion } from "framer-motion";
import mail from "../graphics/Composing Mail.svg";
import phone from "../graphics/Phone.svg";
import loca from "../graphics/Place Marker.svg";
import twitter from "../graphics/Twitter1.svg";
import IG from "../graphics/Instagram1.svg";
import LI from "../graphics/LinkedIn1.svg";
import FB from "../graphics/Facebook1.svg";
import yt from "../graphics/YouTube1.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Fott from "./Fott";
function Contact() {

    // window.onload = () => {
    //     function load() {
    //         try {
    //             var map = new google.maps.Map(document.getElementById("map_div"), {
    //                 center: { lat: 21.141536, lng: 72.780367 },
    //                 zoom: 20,
    //                 zoomControl: true,
    //                 scaleControl: true,
    //                 mapTypeControl: true,
    //                 StreetViewControlOptions: true
    //             });
    //             //
    //             var marker = new google.maps.Marker(
    //                 {
    //                     position: { lat: 21.141536, lng: 72.780367 },
    //                     map: map,
    //                     label: "PS Architect's",
    //                     animation: google.maps.Animation.DROP,

    //                 }
    //             );

    //             //             var icon = new google.maps.MarkerImage('../images/house02.png');
    //             // marker.setIcon(icon);
    //             console.log("map", map);
    //         } catch (e) {

    //         }
    //     }
    //     load();


    // }

    return (
        <>
        <motion.div
       initial={{x:"100%",opacity:0}}
        animate={{x:"0%",opacity:1}}
        transition={{duration:1,ease:"easeInOut"}}
        exit={{x:"-100%"}}
        >
        <motion.div className="contact_page_div"
         initial={{ scale:0.3,backgroundPosition:"100% 100%" }}
         animate={{ scale:1,backgroundPosition:"50% 50%" }}
         transition={{ duration: 1,when:"beforeChildren" }}
        >
                <div className="image_wrapper1 DF AI JC">
                    <motion.p
                    initial={{opacity:0,scale:0.5}}
                    animate={{opacity:1,scale:1}}
                    transition={{
                        duration:0.5,
                        delay:1
                    }}
                    >Contact Us</motion.p>
                </div>
            </motion.div>
            <div className="contact_detail_div DF">
                <motion.div className="contact_deatil_div_left DF AI JC"
                initial={{x:"-100%"}}
                animate={{x:"0%"}}
                transition={{duration:0.5,delay:0}}

                >
                    <div className="contact_detail_div_left1 DF JC ">
                        <p>Want To Work With Us</p>
                        <p>If You Are Interested in Working With Us Then Send Us Your Resume Via Email Attechment’s . </p>
                        <p>The Acceptance Of Resume Was based on many factors including Requirement of Employees.</p>
                        <p>Average Answer Period was Around 24 Hours . wait 24 Hours before contact again.</p>
                        <Link to="/contact" id="link_left_contact">
                            <motion.button
                           
                                onHoverStart={e => { e.target.style.background = "var(--primary-color)"; e.target.style.color = "white"; }}
                                onHoverEnd={e => { e.target.style.background = "none"; e.target.style.color = "var(--primary-color)"; }}
                                whileHover={{ scale: 1.05 }}
                                className='contact_left_button'>
                                Send Resume
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div className="contact_deatil_div_right"
                 initial={{ scale:0.3}}
                 animate={{ scale:1}}
                 transition={{ duration: 1,delay:0.5,when:"beforeChildren"}}
                >
                    <div className="contact_us_final DF ">
                        <p><b>[</b> &nbsp;Contact Details &nbsp;<b>]</b></p>
                        <div className="div_spacer"></div>
                        <p className="contact_description">Make a Call to Us Or Write Us an Email . We Will Try to Answer It In 24 Hours . Try to Make a Call Before Approching To the Office .</p>
                        <motion.div className="details_div"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1,delay:1}}
                        >
                            <p className="office_address DF">
                                <img src={loca}></img>
                                <span>Office Address</span>
                            </p>
                            <a href="">221 ,Highfield Ascot ,vesu , surat</a>
                            <p className="office_mail DF">
                                <img src={mail}></img>
                                <span>Mailbox Address</span>
                            </p>
                            <a href="" id="mail">psarchitects01@gmail.com</a>
                            <p className="office_phone DF">
                                <img src={phone}></img>
                                <span>Telephone No.</span>
                            </p>
                            <a href="" id="phone">+91 9510027280</a>

                        </motion.div>
                        <div className="social_media DF AI  JC">
                            <a href="/"><motion.img src={twitter}
                            initial={{scale:0}}
                            viewport={{once:true}}
                            whileInView={{scale:1}}
                            transition={{duration:0.5,delay:2,ease:"linear"}}
                            ></motion.img></a>
                            <a href="/contact"><motion.img src={yt}
                            initial={{scale:0}}
                            viewport={{once:true}}
                            whileInView={{scale:1}}
                            transition={{duration:0.5,delay:2.3,ease:"linear"}}
                            ></motion.img></a>
                            <a href="/"><motion.img src={IG}
                            initial={{scale:0}}
                            viewport={{once:true}}
                            whileInView={{scale:1}}
                            transition={{duration:0.5,delay:2.6,ease:"linear"}}
                            ></motion.img></a>
                            <a href="/"><motion.img src={LI}
                            initial={{scale:0}}
                            viewport={{once:true}}
                            whileInView={{scale:1}}
                            transition={{duration:0.5,delay:2.9,ease:"linear"}}
                            ></motion.img></a>
                            <a href="/"><motion.img src={FB}
                            initial={{scale:0}}
                            viewport={{once:true}}
                            whileInView={{scale:1}}
                            transition={{duration:0.5,delay:3.1,ease:"linear"}}
                            ></motion.img></a>
                        </div>

                    </div>
                </motion.div>
            </div>
            <motion.div className="map_and_developer_div DF AI JC"
             
            >
                <motion.div className="map_div" id="map_div"
                initial={{ y: "40%" }}
                viewport={{ once: true }}
                whileInView={{
                    y: 0,
                    scale:1,
                    transition: {
                        duration: 0.3,
                        ease: "linear",
                    }
   
                }}
                transition={{ when: "beforeChildren" }}
                >
                </motion.div>
                <Fott></Fott>
                
            </motion.div>
            <div className="footer_pp">
                
            </div>
        </motion.div>
        </>
    )
}

export default Contact;