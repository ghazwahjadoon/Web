import 'bootstrap/dist/css/bootstrap.min.css';
import pencils from '../assets/pencils.png';
<link rel="stylesheet" href="./index.css" />
import mascara from '../assets/mascara.png';
import perfume from '../assets/perfume.png';
import primer from '../assets/primer.png';
import lipstick from '../assets/lipstick.png';
import foundation from '../assets/foundation.png';
import makeupfixerfinalone from '../assets/makeupfixerfinalone.png';

function Gallery()
{   const products = [
    {
      id: 1,
      name: 'Lipstick',
      category: 'Makeup',
      price: 5000,
      shades: ['Red Velvet', 'Nude Brown', 'Pink Blossom'],
      image: lipstick
    },
    {
      id: 2,
      name: 'Primer',
      category: 'Makeup Base',
      price: 6000,
      shades: ['Matte Finish', 'Hydrating Glow'],
      image: primer
    },
    {
      id: 3,
      name: 'Foundation',
      category: 'Makeup',
      price: 8000,
      shades: ['Ivory', 'Beige', 'Warm Sand'],
      image: foundation
    },
    {
      id: 4,
      name: 'Perfume',
      category: 'Fragrance',
      price: 10000,
      shades: ['Floral', 'Woody', 'Fresh'],
      image: perfume
    },
    
    
  ];
    return (
        <div className="d-flex flex-wrap gap-3">
      {products.map(product => (
        <div key={product.id} className="card" style={{ width: '18rem' }}>
             <img src={product.image} className="card-img-top" alt={product.name}/>
             <div className='card-body'>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                    <strong>Category:</strong> {product.category} <br />
              <strong>Price:</strong> Rs. {product.price} <br />
                </p>

             </div>
        </div>
      ))}
    </div>
      );
       
        
    
       
 
      

  
    
}
export default Gallery;