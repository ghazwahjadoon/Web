import tubes from './assets/tubes.png';
import foundmodel from './assets/foundmodel.png';
import bottlesfoundation from './assets/bottlesfoundation.png';

function Gallerysec() {
  const Foundation = [
    {
      id: 1,
      name: 'foundmodel',
      category: 'Models',
      price: '',
      shades: '',
      image: foundmodel
    },
    {
      id: 2,
      name: 'bottlesfoundation',
      category: 'Makeup Base',
      price: 6000,
      shades: ['Matte Finish', 'Hydrating Glow'],
      image: bottlesfoundation
    },
    {
      id: 3,
      name: 'tubes',
      category: 'Makeup',
      price: 8000,
      shades: ['Ivory', 'Beige', 'Warm Sand'],
      image: tubes
    }
  ];

  return (
    <div className="container my-4">
      <div className="row">
        {Foundation.map(foundation => (
          <div key={foundation.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={foundation.image}
                className="card-img-top"
                alt={foundation.name}
              />
              <div className="card-body">
                {foundation.id === 2 || foundation.id === 3 ? (
                  <p className="card-text">
                    <strong>Price:</strong> Rs. {foundation.price}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Gallerysec;
