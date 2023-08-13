import logo from "../../graphics/logo.svg";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";


import twitter from "../../graphics/Twitter.svg";
import yt from "../../graphics/YouTube.svg";
import LI from "../../graphics/LinkedIn.svg";
import IG from "../../graphics/Instagram.svg";
import FB from "../../graphics/Facebook.svg";
function FooterMobile() {
    return (
        <>
            <div className="footer_mobile_class">
                <div className="company_logo DF AI JC">
                    <img src={logo}></img>
                </div>
                <div className="company_content DF AI JC">
                    <div className="left">
                        <p>
                            Experience creativity in any Architectural Interior or Planning Project Experience creativity in any Architectural Interior or Planning Project . quotes or motto of PSA
                        </p>
                    </div>
                    <div className="center">
                        <div className="title_center DF AI JC">
                            <p className="links_title">Quick Links</p>
                        </div>
                        <div className="quick_links DF AI JC">
                            <Link to="/">
                                <p>Home</p>
                            </Link>
                            <Link to="/">
                                <p>About Us</p>
                            </Link>
                            <Link to="/Projects">
                                <p>Project 's</p>
                            </Link>
                            <Link to="/">
                                <p>Contact Us</p>
                            </Link>
                        </div>

                    </div>
                    <div className="end DF AI JC">
                       <a href="" >
                       <img src={yt}></img>
                        </a>   
                        <a href="" >
                       <img src={LI}></img>
                        </a>   
                        <a href="" >
                       <img src={IG}></img>
                        </a>   
                        <a href="" >
                       <img src={twitter}></img>
                        </a>   
                        <a href="" >
                       <img src={FB}></img>
                        </a>   
                           {/* <img src={LI}></img>
                           <img src={IG}></img>
                           <img src={twitter}></img>
                           <img src={FB}></img> */}
                    </div>

                </div>
                <div className="rights_reserved">
                    <p>all right's recieved for PS Architect's 2023 - 2024</p>

                </div>

            </div>
        </>
    )
}
export default FooterMobile;