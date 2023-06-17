import { useEffect, useState, useRef } from "react";
import im from "../images/house02.png";
import { animate, motion, useMotionValue, useScroll, useMotionValueEvent } from "framer-motion";
import im1 from "../images/Rectangle 52.png";
import Arrow from "./Arrow";
import { Link } from "react-router-dom";
import Arrow_svg from "../graphics/Asset 2.svg"
function Projects() {
    var Array_all = ["The Rouse House", "The Garmount House", "The Orange House", "The haf House", "the sofie house"];
    var Array_comm = ["The Rouse House", "The Garmount House", "The Orange House"];
    var Array_resi = ["The Rouse House", "The Garmount House"];
    var [sort_val,setSort]=useState("all");
    var x = useMotionValue(0);
    var ref = useRef(null);
    var [count, setCount] = useState(0);
    const { scrollYProgress } = useScroll();
    var [sc, setSC] = useState(scrollYProgress);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest)
        setSC(latest);
    })
    function active_option(obj) {

        var objects = document.querySelectorAll(".house_menu1 > p")
        objects.forEach((e) => { e.classList.remove("projects_menu_animated") })
        obj.classList.add("projects_menu_animated");
        switch(obj.id){
            case "all":setSort("all");break;
            case "commercial" :setSort("comm") ;break;
            case "residential" : setSort("resi");break;
        }
        
    }
    useEffect(() => {
        console.log("x=", x);
        var doc = document.getElementById("all");
        doc.classList.add("projects_menu_animated");
    }, [])
    useEffect(() => {
        animate(x, 73, {
            duration: 3,
            ease: "easeOut",
            onUpdate(latest) {
                // console.log('New value:', latest);
                // var count=document.getElementById("count_pro1");
                // count.innerHTML=latest.toFixed(0);
                setCount(latest.toFixed(0));
            }
        })

    }, [])


    return (
        <>
            <motion.div className="projects_div"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", when: "beforeChildren" }}
                exit={{ x: "-100%" }}
                ref={ref}
            >
                <div className="projects_div1">
                    <div className="projects_part1">
                        <div className="show_peice">
                            <motion.div className="show_image"
                                initial={{ scale:0.3,backgroundPosition:"100% 100%" }}
                                animate={{ scale:1,backgroundPosition:"50% 50%" }}
                                transition={{ duration: 1,when:"beforeChildren" }}

                            >
                                <div className="image_wrapper">
                                    <div className="image_wrapper_container">
                                        <motion.p
                                        initial={{opacity:0,scale:0.5}}
                                        animate={{opacity:1,scale:1}}
                                        transition={{
                                            duration:0.5,
                                            delay:1
                                        }}
                                        >Project 's</motion.p>
                                        <div className="data_projects_initiated">
                                            <p className="p_data" id="count_pro"><b>[</b>&nbsp;{count}&nbsp;<b>]</b></p>
                                            <p>Initiative's Completed</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="house_menu">
                            <div className="house_menu1">
                                <motion.p
                                    id="all"
                                    whileHover={{ y: -7 }}
                                    onTap={(e) => { active_option(e.target) }}
                                >All</motion.p>
                                <motion.p
                                    whileHover={{ y: -7 }}
                                    id="residential"
                                    onTap={(e) => { active_option(e.target) }}
                                >Residential</motion.p>
                                <motion.p
                                    whileHover={{ y: -7 }}
                                    id="commercial"
                                    onTap={(e) => { active_option(e.target) }}
                                >Commercial</motion.p>
                            </div>
                        </div>
                    </div>
                    <div className="projects_part2">
                        <div className="projects_part2_1">
                            {
                                sort_val.search("all") ? <></> :
                                Array_all.map((e) => {
                                    return (
                                        <motion.div className="house_presentation"
                                            initial={{ y: "20%",scale:0.5 }}
                                            viewport={{ once: true }}
                                            whileInView={{
                                                y: 0,
                                                scale:1,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "linear",
                                                    // when:"beforeChildren"
                                                }

                                            }}
                                            transition={{ when: "beforeChildren" }}

                                        >
                                            <div
                                                className="image_house_presentation">
                                                <motion.div

                                                    className="blurer_image_presentation">
                                                    <div className="data_image_presentation">

                                                        <p id="count_projects">{e}</p>
                                                        <p>Interior</p>
                                                        <Link to="./Rose" ><motion.img src={Arrow_svg} whileHover={{ scale: 1.05 }}></motion.img></Link>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    )
                                })
                            }
                              {
                                sort_val.search("comm") ? <></> :
                                Array_comm.map((e) => {
                                    return (
                                        <motion.div className="house_presentation"
                                            initial={{ y: "20%",scale:0.5 }}
                                            viewport={{ once: true }}
                                            whileInView={{
                                                y: 0,
                                                scale:1,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "linear",
                                                    // when:"beforeChildren"
                                                }

                                            }}
                                            transition={{ when: "beforeChildren" }}

                                        >
                                            <div
                                                className="image_house_presentation">
                                                <motion.div

                                                    className="blurer_image_presentation">
                                                    <div className="data_image_presentation">

                                                        <p id="count_projects">{e}</p>
                                                        <p>Interior</p>
                                                        <Link to="./Rose" ><motion.img src={Arrow_svg} whileHover={{ scale: 1.05 }}></motion.img></Link>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    )
                                })
                            }
                              {
                                sort_val.search("resi") ? <></> :
                                Array_resi.map((e) => {
                                    return (
                                        <motion.div className="house_presentation"
                                            initial={{ y: "20%",scale:0.5 }}
                                            viewport={{ once: true }}
                                            whileInView={{
                                                y: 0,
                                                scale:1,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "linear",
                                                    // when:"beforeChildren"
                                                }

                                            }}
                                            transition={{ when: "beforeChildren" }}

                                        >
                                            <div
                                                className="image_house_presentation">
                                                <motion.div

                                                    className="blurer_image_presentation">
                                                    <div className="data_image_presentation">

                                                        <p id="count_projects">{e}</p>
                                                        <p>Interior</p>
                                                        <Link to="./Rose" ><motion.img src={Arrow_svg} whileHover={{ scale: 1.05 }}></motion.img></Link>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Projects;