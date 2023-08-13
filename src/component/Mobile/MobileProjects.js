import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Arrow_svg from "../../graphics/Asset 2.svg";
import im1 from "../../images/Rectangle 52.png";
function MobileProjects() {
    return (
        <>
            <div className="Projects_mobile_container">
                <div className="title_mobile_projects">
                    <div className="wrapper_mobile_title_projects">
                        <div className="content_wrapper_mobile">
                            <div className="projects_title_mobile">
                                <p>Project 's</p>
                            </div>
                            <div className="count_projects_title">
                                <p className="p_data" id="count_pro"><b>[</b>&nbsp;{20}&nbsp;<b id="bcdf">]</b></p>
                                <p className="p_init">Initiative's Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project_mobile_cards">
                    <div className="project_mobile_cards_container">
                        <div className="house1">
                            <div className="house_data1">
                            {/* <img src={im1} height="100%" width="100%"></img> */}
                            <motion.div 
                            whileHover={
                                {height:"100%"}
                            }
                            transition={{
                                duration:0.3,
                                ease:"linear"
                            }}
                            className="InnerProjectDiv">
                            <p>The Rose House</p>
                            <p>Interior</p>
                          <Link to="./Rose" >
                            <img src={Arrow_svg} ></img>
                            </Link>
                            </motion.div>
                            
                            </div>
                        </div>
                        <div className="house1">
                            <div className="house_data1">
                            {/* <img src={im1} height="100%" width="100%"></img> */}
                            <motion.div 
                            whileHover={
                                {height:"100%"}
                            }
                            transition={{
                                duration:0.3,
                                ease:"linear"
                            }}
                            className="InnerProjectDiv">
                            <p>The Rose House</p>
                            <p>Interior</p>
                          <Link to="./Rose" >
                            <img src={Arrow_svg} ></img>
                            </Link>
                            </motion.div>
                            
                            </div>
                        </div>
                        <div className="house1">
                            <div className="house_data1">
                            {/* <img src={im1} height="100%" width="100%"></img> */}
                            <motion.div 
                            whileHover={
                                {height:"100%"}
                            }
                            transition={{
                                duration:0.3,
                                ease:"linear"
                            }}
                            className="InnerProjectDiv">
                            <p>The Rose House</p>
                            <p>Interior</p>
                          <Link to="./Rose" >
                            <img src={Arrow_svg} ></img>
                            </Link>
                            </motion.div>
                            
                            </div>
                        </div>
                        

                        

                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default MobileProjects;