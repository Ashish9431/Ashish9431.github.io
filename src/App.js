import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Image from './Components/Image';
import Github from './Components/Github';
import Worknew from './Components/Worknew';
import Statistics from './Components/Statistics';

function App() {
  return (

  



    <div style={{"backgroundColor":"#0a192f"}} >
  



      


     <Navbar/>
  
     <div style={{"backgroundColor":"#0a192f",    "width":"100%","height":"30px"}}>
      
     </div>


     <Image/>
     <Home/>
     {/* <div style={{"backgroundColor":"#0a192f",    "width":"100%","height":"100px"}}>
      
       </div> */}
     < About/>
    

    <div  style={{"backgroundColor":"#0a192f"}}>
    <div style={{"backgroundColor":"#0a192f",    "width":"100%","height":"30px"}}>
      
      </div>



     <Skills/>
     <div style={{"backgroundColor":"#0a192f",    "width":"100%","height":"100px"}}>
      
       </div>
    
  
     <Work/>
     <div style={{"backgroundColor":"#0a192f",    "width":"100%","height":"30px"}}>
      
       </div>
       <Statistics/>

     <Contact/>





    </div>
   







     </div>
  
  );
}

export default App;
