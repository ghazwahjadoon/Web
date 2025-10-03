import 'bootstrap/dist/css/bootstrap.min.css';
import pencils from '../assets/pencils.png';
import mascara from '../assets/mascara.png';
import perfume from '../assets/perfume.png';
import primer from '../assets/primer.png';
import lipstick from '../assets/lipstick.png';
import foundation from '../assets/foundation.png';
import makeupfixerfinalone from '../assets/makeupfixerfinalone.png';

function Gallery() {
  const products = [
    { id: 1, name: 'Lipstick', price: 5000, image: lipstick },
    { id: 2, name: 'Primer', price: 6000, image: primer },
    { id: 3, name: 'Foundation', price: 8000, image: foundation },
    { id: 4, name: 'Perfume', price: 10000, image: perfume },
    { id: 5, name: 'Mascara', price: 1300, image: mascara },
    { id: 6, name: 'Pencils', price: 1500, image: pencils },
  ];

  return (
    <div className="container my-4">
      <div className="row g-3">
        {products.map(product => (
          <div 
            key={product.id} 
            className="col-12 col-sm-6 col-md-4 col-lg-2   d-flex justify-content-center"
          >
            <div className="card" style={{ width: "14rem" }}>
              <img 
                className="card-img-top" 
                src={product.image} 
                alt={product.name} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: Rs {product.price}</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
