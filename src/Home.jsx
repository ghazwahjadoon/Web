import React from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
function Home() {
  return (
    <div className='container-fluid' style={{backgroundColor: "lavenderblush", width: "100%"}}>
      <div className="row" style={{height: "30vh"}}>
        <div className="col">
          <Navbar/>
        </div>
      </div>
      <div className="row" style={{height: "160vh"}}>
        <div className="col">
          <Gallery />
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
