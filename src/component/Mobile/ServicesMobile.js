import { useEffect } from "react";
function ServiceMobile() {
    var images = [
        "https://images.squarespace-cdn.com/content/v1/5adb89f2aa49a19e7960b934/1608602979923-6PW5561L0G0LZFUA6Z9Q/image-asset.jpeg",
        "https://architizer-prod.imgix.net/media/1478816125050b3e61143c340b12857d19b7a294dc563.jpg?fit=max&w=1140&q=60&auto=format&auto=compress&cs=strip&h=569",
        "https://4.imimg.com/data4/XY/ED/MY-27587645/layout-building-design-500x500.jpg",
        "https://flyingcdn-98ab332c.b-cdn.net/wp-content/uploads/2022/03/interior-designer-in-delhi.jpg"
    ];

    function ShowService(e){
        var arr=document.getElementById(e+"1");
        arr.style.width="100%";

        setTimeout(()=>{
arr.style.width="0%";
        },2500);
    }
    function HideService(e){
        var arr=document.getElementById(e+"1");
        arr.style.width="0%";
    }
    
    
    return (
        <>
            <div className="service_div_mobile">
                <div className="wrapper_service_div_mobile">
                    <div className="service_title_mobile">
                        <p>Our Services</p>
                    </div>
                    <div className="service_content">
                        <div className="content_cat">
                            <div className="gridItem">
                                <div className="gridItem_content">
                                    <img src={images[0]} id="image0" 
                                    onClick={(e)=>{ShowService(e.target.id)}}
                                    ></img>
                                    <div className="wrapper_service_content DF AI JC" id="image01">
                                        <p>Architectural</p>
                                    </div>
                                </div>
                            </div>
                            <div className="gridItem"

                            >
                                <div className="gridItem_content">
                                    <img src={images[1]} id="image1" 
                                    onClick={(e)=>{ShowService(e.target.id)}}></img>
                                    <div className="wrapper_service_content DF AI JC" id="image11">
                                        <p>Landscape</p>

                                    </div>
                                </div>
                            </div>
                            <div className="gridItem">
                                <div className="gridItem_content">
                                    <img src={images[2]} id="image2" 
                                    onClick={(e)=>{ShowService(e.target.id)}}></img>
                                    <div className="wrapper_service_content DF AI JC" id="image21">
                                        <p>Planning</p>
                                    </div>
                                </div>
                            </div>
                            <div className="gridItem">
                                <div className="gridItem_content">
                                    <img src={images[3]} id="image3" 
                                    onClick={(e)=>{ShowService(e.target.id)}}></img>
                                    <div className="wrapper_service_content DF AI JC" id="image31">
                                        <p>Interior</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceMobile;