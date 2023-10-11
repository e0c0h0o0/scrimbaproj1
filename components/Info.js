import React from "react"

export default function Info(){
    return (
        <div className="info">
          <img src= "./images/Thea.jpg" className = "pohto"/>
          <div className="info--profile">
           <h1>Thea Z</h1>
           <h3>Frontend Developer</h3>
           <a className="info--website" href="https://linkedin.com" target="_blank" rel="noreferrer"><h4>Thea.website</h4></a>
           <div className="botton">
           
           <a className="email"><ion-icon name="mail-outline"></ion-icon><span> Email </span></a> 
           <a href="https://linkedin.com" className="linkedin" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</a> 
           </div>
        </div>
         </div>
    )
}