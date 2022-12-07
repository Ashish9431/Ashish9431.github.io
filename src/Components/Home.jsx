import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import "../App.css"
// import pp from "../assets/pp.png"
import cv from "../assets/AshishKUMAR.pdf"
import Typewriter from "typewriter-effect"



const Home = () => {
  return (




   <div name='home' id="res1"   className='w-full h-500px bg-[#0a192f]'>
     {/* Container */}
     <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
       <p className='text-pink-600'>Hi, my name is</p>
        
       <h1 className='  text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
         Ashish Kumar
       </h1>
        
       <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
         I'm a Full Stack Developer.

       </h2>


                       <div style={{"color":"white"}}>
                       <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString(" I’m a full-stack developer specializing in building and designing exceptional digital experiences. Currently, I’m focused onbuilding responsive full-stack web applications with useful Functionality")
                            
                            .pauseFor(5000)
                            .start()
                          }
                            />

                       </div>
                            
                         

                       
  




       {/* <p className='text-[#8892b0] py-4 max-w-[700px]'>
         I’m a full-stack developer specializing in building and 
         designing exceptional digital experiences. Currently, I’m focused on
         building responsive full-stack web applications.
       </p> */}
       <div>
         <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
           View Work
           <span className='group-hover:rotate-90 duration-300'>
             <HiArrowNarrowRight className='ml-3 ' />
           </span>
         </button>


         <div id="cv" > 
      
      <a href="https://drive.google.com/file/d/1ImbE5PM2eLA0NoE-fbgXnztEDrM7x_oK/view?usp=sharing" target="_blank" rel="noopener noreferrer">

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
