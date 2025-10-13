import b from './assets/Blacky.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
function Aboutus()
{
    return(
        <>
           
            <h1 style={{ fontFamily: "Bradley Hand ITC", textAlign: "center" }}>
          WE ARE GLOWAH, YOUR TRUST
        </h1>
        <hr />

         <div className="row " >
             <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                 <p style={{ fontFamily: "Times New Roman", fontSize:'16px'}}>Welcome to Glowah Beauty, your all-in-one beauty destination — where glam meets confidence! 💫
We’re more than just a makeup brand — we’re a full beauty experience. From luxurious makeup products you’ll fall in love with, to our professional parlour services that bring your dream look to life, Glova Beauty is all about helping you shine in your own style. Whether it’s your bridal makeover, party glam, or just a little self-love day, our talented artists are here to make you glow brighter than ever. 🌸
At Glova Beauty, every face tells a story — and we’re here to make yours unforgettable.</p>
             </div>
              <div className="col text-center">
                <img src={b} alt="" style={{height:"200px"}} className="img-fluid rounded-4 "/>
             </div>
         </div>
         <div className='row' >
        <h5 style={{ fontFamily: "Bradley Hand ITC", textAlign: "center",fontWeight:"bold",fontSize:'20px' }}>Our Vision</h5>
              <p style={{textAlign:"center",fontSize:'12px'}}>Our vision is simple yet ambitious: to create the largest community of beauticians and beauty services in the world. We aim to redefine the beauty experience, making it accessible, convenient, and inclusive for everyone. Through innovation, creativity, and community engagement, we're shaping the future of beauty one appointment at a time.we dream of building a world where beauty is not just seen — it’s felt, shared, and celebrated. Our mission goes beyond makeup; it’s about empowering individuals, supporting local beauticians, and bridging the gap between talent and opportunity.
We’re crafting a platform where passion meets purpose — where every artist finds their stage and every customer discovers their unique glow.
Driven by innovation and fueled by creativity, Glova Beauty is redefining what it means to feel beautiful — with authenticity, confidence, and connection at its heart.
Because to us, beauty isn’t about perfection — it’s about expression, empowerment, and endless possibilities.</p>
         </div>
         <div className='row' style={{ backgroundColor: "pink", padding: "20px" }}>
  <div className='col-12 col-sm-12 col-md-12 col-lg-12' style={{ textAlign: "center" }}>
    <h1 style={{ 
      fontFamily: "Bradley Hand ITC", 
      textAlign: "center",
      fontWeight: "bold",
      fontSize: '28px',
      marginBottom: "15px"
    }}>
      Contact Us
    </h1>
    <p style={{ fontSize: "16px", marginBottom: "20px" }}>
      Makeup celebrates diversity; it’s not about hiding flaws, but highlighting your unique beauty. 
      Whether it’s a bold red lip, a soft glow, or a touch of shimmer, makeup gives every person the 
      freedom to express who they truly are. At Glova Beauty, we believe makeup isn’t a mask — it’s your magic.
    </p>

    {/* Icon Container */}
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <FaInstagram size={30} />
      <FaFacebookF size={30} />
      <FaTwitter size={30} />
      <FaWhatsapp size={30} />
      <MdCall size={30} />
      <MdLocationOn size={30} />
    </div>
  </div>
</div>

        </>
    );
}
export default Aboutus