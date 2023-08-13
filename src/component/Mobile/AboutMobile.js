import img from "../../images/house02.png";
import Arrow from "./../../graphics/Asset 2.svg";
import polygon from "../../graphics/polygon.svg";
import ploygon from "../../"
function AboutMobile() {
    return (
        <div className="about_mobile_div">
            <div className="about_mobile_title">
                <p>Our Vision</p>
            </div>
            <div className="about_mobile_content DF AI JC">
                <img src={img}></img>
                <div className="wrapper_about_mobile">
                    <div className="full_content_vision_mobile">
                        <div className="full_content_part1">
                            <p>
                                PSArchitect was founded on 8th july 1930 .in order to provide the unique solutions of the project and terretories
                                PSArchitect was founded on 8th july 1930 .in order to provide the unique solutions of the project and terretories
                                PSArchitect was founded on 8th july 1930 .in order to provide the unique solutions of the project and terretories
                                PSArchitect was founded on 8th july 1930 .in order to provide the unique solutions of the project and terretories
                            </p>
                            <span className="see_more_class">
                                <span>See More</span>
                                <img src={Arrow}></img></span>

                        </div>
                        <div className="full_content_part2">
                            <div className="rectangle01 DF AI JC">
                            <img src={polygon}></img>
                                    <p className="project_data_about_mobile">Project 's</p>
                                    <p className="data_about_mobile">73</p>
                            </div>
                            <div className="rectangle01 DF AI JC">
                            <img src={polygon}></img>
                            <p className="project_data_about_mobile">In Service</p>
                                    <p className="data_about_mobile">3Y</p>
                            </div>
                            <div className="rectangle01 DF AI JC">
                            <img src={polygon}></img>
                            <p className="project_data_about_mobile">In States</p>
                                    <p className="data_about_mobile">04</p>
                            </div>
                            <div className="rectangle01 DF AI JC">
                            <img src={polygon}></img>
                            <p className="project_data_about_mobile">Average Cost</p>
                                    <p className="data_about_mobile">7.2L</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMobile;