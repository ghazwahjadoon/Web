import 'bootstrap/dist/css/bootstrap.min.css';
import pencils from '../assets/pencils.png';
import mascara from '../assets/mascara.png';
import perfume from '../assets/perfume.png';
import primer from '../assets/primer.png';
import lipstick from '../assets/lipstick.png';
import foundation from '../assets/foundation.png';
import makeupfixerfinalone from '../assets/makeupfixerfinalone.png';
import tints from '../assets/tints.png';
import Eyeliner from '../assets/Eyeliner.png';
import Nailpaints from '../assets/Nailpaints.png';
import Brushes from '../assets/Brushes.jpg';
import Blenders from '../assets/Blenders.jpg';
import Lipsticks from '../assets/Lipsticks.jpg';
import Lipsticks2 from '../assets/lipsticks2.jpg';
import Lipsticks3 from '../assets/Lipsticks3.jpg';
import Lipsticks4 from '../assets/Lipstick4.jpg';
import Lipsticks5 from '../assets/Lipstick5.jpg';
import Lipoils  from '../assets/Lipoils.jpg';
import Brushes2 from '../assets/Brushes2.jpg';        
import Brushes3 from '../assets/Brushes3.jpg';
import Blenders2 from '../assets/Blenders2.jpg';
import Brushes4 from '../assets/Brushes4.jpg';
import Concealerbrushes from '../assets/Concealerbrushes.jpg';
import tubes from '../assets/tubes.png';
import Pallet1 from '../assets/Pallet1.png';
import Pallet2 from '../assets/Pallet2.jpg';
import Pallet3 from '../assets/Pallet3.jpg';
import Pallet4 from '../assets/Pallet4.jpg';




function Gallery() {
  const products = [
     { id: 1, name: 'Makeup Brushes', price: 1500, image: Brushes }, 
    { id: 2, name: 'Primer', price: 6000, image: primer },
    { id: 3, name: 'Foundation', price: 8000, image: foundation },
    { id: 4, name: 'Perfume ', price: 10000, image: perfume },
    { id: 5, name: 'Mascara', price: 1300, image: mascara },
    { id: 6, name: 'Pencils', price: 1500, image: pencils },
    { id: 7, name: 'makeupfixer', price: 1500, image: makeupfixerfinalone },
    { id: 8, name: 'Tints', price: 1500, image: tints },
    { id: 9, name: 'Eyeliner', price: 1500, image: Eyeliner },
    { id: 10, name: 'Nail Paints', price: 1500, image: Nailpaints },
    { id: 11, name: 'Lipstick', price: 5000, image: lipstick },
    
    { id: 12, name: 'Blenders', price: 1500, image: Blenders },
    { id: 13, name: 'Lipsticks', price: 1500, image: Lipsticks },
    { id: 14, name: 'Lipsticks', price: 1500, image: Lipsticks2 },
    { id: 15, name: 'Lipsticks', price: 1500, image: Lipsticks3 },
    { id: 16, name: 'Lipsticks', price: 1500, image: Lipsticks4 },             
    { id: 17, name: 'Lipsticks', price: 1500, image: Lipsticks5 },
    { id: 18, name: 'Lipoils', price: 1500, image: Lipoils },
    { id: 19, name: 'Brushes', price: 1500, image: Brushes2 },
    { id: 20, name: 'Brushes', price: 1500, image: Brushes3 },
    { id: 21, name: 'Blenders', price: 1500, image: Blenders2 },
    { id: 22, name: 'Brushes', price: 1500, image: Brushes4 }, 
    {id:23, name:'Concealer brushes',price: 1000,image: Concealerbrushes},
     {id:24, name:'Foundation Tubes',price: 1000,image: tubes},
 {id:25, name:'Nude Pallet',price: 1000,image: Pallet1},
 {id:26, name:'Pallet',price: 1000,image: Pallet2},
 {id:27, name:'Pallet',price: 1000,image: Pallet3 },
 {id:28, name:'Pallet',price: 1000,image: Pallet4},

    




     
     
  ];

  return (
    <div className="container-fluid my-3">
      <div className="row g-3">
        {products.map(product => (
          <div 
            key={product.id} 
            className="col-12 col-sm-6 col-md-4 col-lg-3   justify-content-center"
          >
            <div className="card  w-100" style={{ width: "10rem" , borderRadius: "25px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
              <img 
                className="card-img-top" 
                src={product.image} 
                alt={product.name} 
           style={{
    height: "350px",
    objectFit: "cover",
  }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: Rs {product.price}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
