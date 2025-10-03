import React from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Cover from './Cover'
import Secondcover from './Secondcover'
import Gallerysec from './Gallerysec'
import ThirdCover from  './Thirdcover'
import Gallerysec3 from './Gallerysec3'
import Login from './Login'
import Signin from './Signin'

function Home() {
  return (
  <>
  
<div className="Container" >
   <div className="row-12" > 
         <div className="col-6">
          
          {/* /* <Login/> */}
         </div> 
         
    <div/>
 
      
        <div className="col-12">
          
           <Signin/>
           {/* <h1>hi</h1> */}
        </div>
        </div>
        

    </div>  


    </>
  );
}

export default Home
