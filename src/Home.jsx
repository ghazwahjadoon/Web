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

  <>  <div className='container-fluid m-0 p-0 'style={{ background: "linear-gradient(120deg, #fce4ec, #e8f5e9)",}}>
       <div className='row'>
          <div className='col'>
              <Navbar/>
          </div>
       </div>
       <div className='row'>
         <div className='col'>
              <Cover/>
         </div>

       </div>
        <div className='row'>
         <div className='col'>
            <Gallery/>
         </div>

       </div>
       <div className='row'>
         <div className='col'>
             
            {/* <Gallerysec/> */}
           
            <Gallerysec3/>
         </div>

       </div>
        <div className='row'>
         <div className='col'>
             
            {/* <Gallerysec/> */}
           
            <Footer/>
         </div>

       </div>


  </div>
  
   
    </>
  );
}

export default Home
