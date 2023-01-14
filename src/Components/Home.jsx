import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import "../App.css"
// import pp from "../assets/pp.png"
import cv from "../assets/AshishKUMAR.pdf"
import Typewriter from "typewriter-effect"
import { Link } from 'react-scroll';



const Home = () => {

  return (

  




   <div name='home' id="res1"   className='w-full h-400px bg-[#0a192f]'>
     {/* Container */}
     <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <br />
       <p className='text-pink-600'>Hi, my name is</p>
        
       <h1 id="name" className='  text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
         Ashish Kumar
       </h1>
        
       <div id="Post" className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
       
                         I'm a Full Stack Developer.
                            
                           



       </div>
       <br /><br />


                       <div style={{"color":"white"}}>
                       {/* <Typewriter 
                       
                            onInit={(typewriter)=> typewriter.typeString(" I’m a full-stack developer specializing in building and designing exceptional digital experiences. Currently, I’m focused onbuilding responsive full-stack web applications with useful Functionality")
                            
                            .pauseFor(5000)
                            .start()
                          }
                            /> */}
                            <h5  id="Post" style={{"fontStyle":" italic","width":"400px","marginLeft":"240px","color":"","textAlign":"center"}}>
                            I’m a full-stack developer specializing in building and designing exceptional digital experiences. Currently, I’m focused onbuilding responsive full-stack web applications with useful Functionality

                            </h5>

                       </div>
                       <br />
                            
                         

                       
  




       {/* <p className='text-[#8892b0] py-4 max-w-[700px]'>
         I’m a full-stack developer specializing in building and 
         designing exceptional digital experiences. Currently, I’m focused on
         building responsive full-stack web applications.
       </p> */}
       <div>
       <Link to='work' id="name" smooth={true} duration={1400}>
         <button  style={{"marginLeft":"360px"}}  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
           View Work
           <span className='group-hover:rotate-90 duration-300'>
             <HiArrowNarrowRight className='ml-3 ' />
           </span>
         </button>
            {/* Work */}
          </Link>



         <div id="cv" > 
      
      <a href="https://drive.google.com/file/d/1WIUk-7lkbkStXdxFkNx0tMvmQAGKXOCb/view?usp=share_link" target="_blank" rel="noopener noreferrer">

          <button >View Cv</button>

      </a>

         
   <a href={cv} download>

          <button>Download Cv</button>

   </a>
       
             
         </div>
       </div>
     </div>
   </div>
   

  );
};



export default Home;
