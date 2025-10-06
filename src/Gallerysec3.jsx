import mod5 from './assets/mod5.jpg';
import Pallet1 from './assets/Pallet1.png';
import bg from './assets/bg.jpg';

function Gallerysec3() {
  const pallets = [
    { id: 1, image: mod5 },
    { id: 2, image: Pallet1 },
    { id: 3, image: bg },
  ];

  return (
    <>
      <div className="container-fluid my-2">
        <div className="row g-4 justify-content-center">
          {pallets.map((pallet) => (
            <div
              key={pallet.id}
              className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
            >
              <div className="card rounded-3 shadow" style={{ width: "18rem" }}>
                <img
                  src={pallet.image}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title bold">LAUNCHING SOON</h5>
                  <p
                    className="card-text"
                    style={{ fontFamily: "Times New Roman" }}
                  >
                    Glowah Beauty is here to empower you to shine — because true
                    beauty always glows from within. We believe makeup should do
                    more than just enhance appearances — it should inspire
                    confidence and self-expression.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallerysec3;
