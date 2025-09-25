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
        <div className="col">
          <Navbar/>
        </div>
        

      </div>
      <div className="row" >
        <div className="col">
          <Cover/>
        </div>
        </div>
        <br />

      <div className="row">
        <div className="col">
          <Gallery />
        </div>
      </div>
      <br />
      <br />
      <div className="row mb-5">
        <div className="col">
          <Secondcover />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <Gallerysec />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <ThirdCover />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <Gallerysec3 />
        </div>
      </div>
      <div className="row" style={{height: "30vh"}}>
        <div className="col">
          <Footer/>
          
        </div>
      </div>
    </div>
  )
}

export default Home
