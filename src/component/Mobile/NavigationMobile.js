import { Link } from "react-router-dom";
import logo from "../../graphics/logo.svg";

function NavigationMobile(){
    
    function showMenu(){
        var ac=document.getElementById("menu_divv");
        var bar=document.getElementById("bars");
        ac.classList.toggle("animation_menu");
        

        
            if(bar.classList.contains("fa-bars")){
                bar.className="fa fa-close";
           
            }
            else{
                bar.className="fa fa-bars";
               
            }
    }
    function setActive(e1){
  var all=document.querySelectorAll("#link");
  Array.from(all).forEach((e)=>{
    e.style.outline="none";
    console.log(e);
  })
  console.log(e1);
  e1.target.style.outline="3px solid var(--primary-color2)";
    }
    return(
        <>
         <div className="mobile_menu_div DF AI JC">
            <div className="logo_menu">
                <img src={logo}></img>
            </div>
            <div className="drop_down_btn">
         <i class="fa fa-bars" id="bars" onClick={showMenu}></i>
            </div>
            
</div>
<div className="mobile_menu_div_temp1 DF AI JC" id="menu_divv">
    <Link to="/"  >
        <p id="link" onClick={setActive}> Home </p>
    </Link>
    <Link to="/" id="link" >
        <p id="link" onClick={setActive} 
        
        style={{
            width:"100%",
            padding:"5% 5% 5% 5%"
        }}> Services </p>
    </Link>
    <Link to="/projects" id="link" >
        <p id="link" onClick={setActive}
         style={{
            width:"100%",
            padding:"5% 5% 5% 5%"
        }}
        > Project's </p>
    </Link>
    <Link to="/" id="link" >
        <p id="link" onClick={setActive}
         style={{
            width:"100%",
            padding:"5% 5% 5% 5%"
        }}
        > Contact Us </p>
    </Link>
   


            </div>
        </>
    )
}

export default NavigationMobile;