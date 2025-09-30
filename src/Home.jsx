import React from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Cover from './Cover'
import Secondcover from './Secondcover'
import Gallerysec from './Gallerysec'
import ThirdCover from  './Thirdcover'
import Gallerysec3 from './Gallerysec3'

function Home() {
  return (
    <div className='container-fluid' >
      <div className="row mb-3" >
        <div className="col-12">
          <Navbar/>
        </div>
        

      </div>
      <div className="row" >
        <div className="col-12">
          <Cover/>
        </div>
        </div>
        <br />

      <div className="row">
           <Gallery />
       </div>
      <br />
      <br />
      <div className="row ">
  <div className="col-12 ">
          <Secondcover />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6 col-lg-4">
          <Gallerysec />
        </div>
      </div>
      <div className="row ">
        <div className="col-12 col-lg-12 col-md-12">
          <ThirdCover />
        </div>
      </div>
      <div className="row ">
        <div className="col-12 col-lg-4 col-md-6">
          <Gallerysec3 />
        </div>
      </div>
      <div className="row" style={{height: "30vh"}}>
        <div className="col 12">
          <Footer/>
          
        </div>
      </div>
    </div>
  )
}

export default Home
