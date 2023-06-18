import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo } from "./logo";
import twitter from "../graphics/Twitter.svg";
import yt from "../graphics/YouTube.svg";
import LI from "../graphics/LinkedIn.svg";
import IG from "../graphics/Instagram.svg";
import FB from "../graphics/Facebook.svg";
function Fott(){
    return(
        <>
         <motion.div className="footer_div"
         initial={{x:"100%",opacity:0}}
         animate={{x:"0%",opacity:1}}
         transition={{duration:0.75,ease:"linear"}}
         exit={{
            x:"-100%",
            transition:{duration:0.5,ease:"linear"}
        }}
         >
        <motion.div className="footer_div1"
        viewport={{ once: true }}
                 initial={{y:"402%"}}
                 whileInView={{
                     y: 0,
                     transition: {
                         duration: 0.5,
                         ease: "linear",
                         // when:"beforeChildren"
                     }
 
                 }}
        >
            <div className="footer_contact DF AI JC">
                <p>For Any Query Feel Free To Get In Touch</p>
                <Link to="/contact" id="footer_link">
                <motion.button
              onHoverStart={e=>{e.target.style.background="var(--primary-color)";e.target.style.color="white";}}
              onHoverEnd={e=>{e.target.style.background="none";e.target.style.color="var(--primary-color)";}}
              whileHover={{scale:1.02}}
                className='footer_button'>
                Contact Us
              </motion.button>
                </Link>
            </div>
            <div className="footer_end">
                <div className="psa_footer DF AI JC">
                    <div className="psa_footer1 DF AI JC">
                        <div className="logo_container DF AI JC">
                            <Logo></Logo>
                        </div>
                        <p>Experience creativity in any Architectural Interior or Planning  Project Experience creativity in any Architectural Interior or Planning  Project . quotes or motto of PSA</p>
                        <p><Link to="/">Privacy Policy</Link>&nbsp; <span>|</span> &nbsp;<Link to="/">Terms Of Usage</Link></p>
                    </div>
                    <div className="psa_footer2 DF AI JC">
                        <div className="footer2_container">
                            <p>Quick Links</p>
                            <Link to="/"><p>Home</p></Link>
                            <Link to="/"><p>Project's</p></Link>
                            <Link to="/"><p>About Us</p></Link>
                            <Link to="/"><p>Contact Us</p></Link>
                        </div>
                        
                    </div>
                    <div className="psa_footer3 DF AI JC">
                    <div className="footer3_container ">
                    <p>Follow Us On</p>
                            <a to="/"><img src={twitter}></img></a>
                            <a to="/"><img src={yt}></img></a>
                            <a to="/"><img src={IG}></img></a>
                            <a to="/"><img src={LI}></img></a>
                            <a to="/"><img src={FB}></img></a>
                        </div>
                        
                    </div>
                </div>
                <div className="developer_footer DF AI JC">
                <p className="PSA_credit">Copyright &copy; 2021 By <b>PS Architect's</b> . All Rights Reserved</p>
                <p className="dev_credit">Design And Developed By <b>Mayank H. Sheladiya</b></p>
                </div>
               
            </div>
            
        </motion.div>
        </motion.div>
        </>
    );
}

export default Fott;