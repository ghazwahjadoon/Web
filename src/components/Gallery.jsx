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

function Gallery() {
  const products = [
    { id: 1, name: 'Lipstick', price: 5000, image: lipstick },
    { id: 2, name: 'Primer', price: 6000, image: primer },
    { id: 3, name: 'Foundation', price: 8000, image: foundation },
    { id: 4, name: 'Perfume', price: 10000, image: perfume },
    { id: 5, name: 'Mascara', price: 1300, image: mascara },
    { id: 6, name: 'Pencils', price: 1500, image: pencils },
     { id: 7, name: 'makeupfixer', price: 1500, image: makeupfixerfinalone },
      { id: 8, name: 'Tints', price: 1500, image: tints },
      { id: 9, name: 'Eyeliner', price: 1500, image: Eyeliner },
      { id: 10, name: 'Nail Paints', price: 1500, image: Nailpaints },
    { id: 11, name: 'Makeup Brushes', price: 1500, image: Brushes }, 
     { id: 12, name: 'Blenders', price: 1500, image: Blenders },
     
     
  ];

  return (
    <div className="container-fluid my-3">
      <div className="row g-3">
        {products.map(product => (
          <div 
            key={product.id} 
            className="col-12 col-sm-6 col-md-4 col-lg-3  d-flex justify-content-center"
          >
            <div className="card w-100" style={{ width: "10rem" }}>
              <img 
                className="card-img-top" 
                src={product.image} 
                alt={product.name} 
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
