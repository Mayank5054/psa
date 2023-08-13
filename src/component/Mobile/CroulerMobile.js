import house from "./../../images/house02.png";
function CroulerMobile(){
    var image_src = ["https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    , "https://media.istockphoto.com/id/524085051/photo/beautiful-exterior-of-new-luxury-home-at-twilight.jpg?s=612x612&w=0&k=20&c=wPqEpJkL22wE3NHSCgdWXq2FC8a-KvSCpP7XRIZHuOU="]

var house_names = ["The Lotus House", "The Campag House", "The Marvel House"];
var count=0;
    function changeImage(){
        count++;
        if(count%3==0){count=0;}
        var content_wrapper=document.getElementById("content_wrapper");
        var img=document.getElementById("house_image");
        var name =document.getElementById("project_name");
        var desc=document.getElementById("project_desc");
        if(content_wrapper!=null){
            content_wrapper.classList.add("changeImage");
        }
        
        setTimeout(()=>{
            if(name!=null){
             name.innerHTML=house_names[count];
             img.setAttribute("src",image_src[count]);
            }
        },1100)
        console.log(content_wrapper);
    }

    setTimeout(()=>{
    setInterval(()=>{
        changeImage();
        setTimeout(()=>{
            var content_wrapper=document.getElementById("content_wrapper");
            if(content_wrapper!=null){
                content_wrapper.classList.remove("changeImage");
            }
    
        },2500);
    },5000);    
    });
    return(
        <div className="crouler_div_mobile">
            <div className="crouler_image_mobile DF AI JC">
                <img src={image_src[0]} className="crouler_image_img" id="house_image"></img>
                <div className="wrapper DF">
                    <div className="content_to_be">
                        <div className="content_wrapper" id="content_wrapper">
                            <p id="project_name">{house_names[0]}</p>
                            <p id="project_desc">The he holy name of lotus flower .The Rossophisticated house made on the theme of lotus and on the holy name of lotus flower .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CroulerMobile;