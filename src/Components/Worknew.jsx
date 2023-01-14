 import React from 'react'
import "./work.css"
import kim from "../assets/kim.png"
import orbit from "../assets/orbit.png"
import shephora from "../assets/shephora.png"
import keeto from "../assets/keeto.png"
import hotel from "../assets/hotel.png"





function Worknew() {
  return (
    <div id="work1" >
        <h1>MY Recent Work</h1>


    <div id="col1">
        <div id="data1">
              
                <img id="hover1"  src={shephora} alt="" />
      

                <div id="detail1">
                    <h1>SEPHORA clone:-</h1>
                
                    <h5>
                    Sephora is an e-commerce website which Deals in all types of Cosmetic Items
                    </h5>

                    <h1>Tech Stack</h1>
                    <h4>React | Redux | Nodejs | Express | MongoDB | BOOTSTRAP | JAVASCRIPT</h4>

                     <p>5 Contributors</p>
                    <div id="demo1">

                        <a href="https://sephora-india-clone.netlify.app/">
                    <u>View Demo</u>

                        </a>

                        <a href="https://github.com/Sandipgit2999/ambiguous-cap-532">

                    <u>Get code</u>
                        </a>

                    </div>

                </div>

        </div>



        <div id="data1">
                <img id="hover1" src={keeto} alt="" />

                <div id="detail1">
                    <h1>Keeto clone:-</h1>
                
                    <h5>
                    Online Fundraising Platform India To Receive donations via
all popular payment modes to a needy one
                    </h5>

                    <h1>Tech Stack</h1>
                    <h4>REACT | REDUX | BOOTSTRAP | JAVASCRIPT | ChakraUi</h4>
    
                     <p>3 Contributors</p>                 
                    <div id="demo1">
<a href="https://cloneketto.netlify.app/">
<u>View Demo</u>
</a>

<a href="https://github.com/Aditya-Raj-Dev/racial-lip-1108">  <u>Get code</u></a>


                   
                  

                    </div>

                </div>

        </div>
     </div>











     <div id="col1">
        <div id="data1">
                <img id="hover1" src={hotel} alt="" />

                <div id="detail1">
                    <h1>Orbitz clone:-</h1>
                
                    <h5>
                    Orbitz.com site, through which one can book stays, flights, search hotels and easily book the hotels.
                    </h5>

                    <h1>Tech Stack</h1>
                    <h4>HTML | CSS | BOOTSTRAP | JAVASCRIPT</h4>

                    <p>5 Contributors</p>
                    <div id="demo1">

<a href="https://delightful-longma-b483a5.netlify.app/">  <u>View Demo</u></a>
<a href="https://github.com/sumit-skribe/orbitz">  <u>Get code</u></a>

                  
                   

                    </div>

                </div>

        </div>



        <div id="data1"   >
                <img id="hover1" src={kim} alt="" />

                <div id="detail1">
                    <h1>Kimaye Clone:-</h1>
                
                    <h5>
                    KIMAYE is an e-commerce website which Deals in Selling fruits at Door Step..
                    </h5>

                    <h1>Tech Stack</h1>
                    <h4>HTML | CSS | BOOTSTRAP | JAVASCRIPT</h4>

                    
                    <div id="demo1">
                        <a href="https://whimsical-gingersnap-c9aa58.netlify.app/"> <u>View Demo</u></a>
                   <a href="https://github.com/ashish123sharma/Kimaye-Project">

                    <u>Get code</u>
                   </a>

                    </div>

                </div>

        </div>
     </div>










    </div>
  )
}

export default Worknew