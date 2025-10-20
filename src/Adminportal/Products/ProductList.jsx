import { Link } from "react-router-dom";

function ProductList() {
  const products = [
    { id: 1, name: "Lipstick", price: 1200, category: "Makeup", stock: 20 },
    { id: 2, name: "Foundation", price: 2500, category: "Face", stock: 10 },
    {id: 3,name:"Perfume",price:3500,category:"Fragrance",stock:5},
    { id: 4, name: "Tube Foundation", price: 2200, category: "Face", stock: 15 },
  { id: 5, name: "Lip Pencil", price: 800, category: "Lips", stock: 25 },
  { id: 6, name: "Eyeshadow Palette", price: 3200, category: "Eyes", stock: 12 },
  { id: 7, name: "Nude Palette", price: 3400, category: "Eyes", stock: 8 },
  { id: 8, name: "Beauty Blender", price: 600, category: "Tools", stock: 30 },
  { id: 9, name: "Makeup Brushes Set", price: 2800, category: "Tools", stock: 10 },
  { id: 10, name: "Lip Tint", price: 1000, category: "Lips", stock: 20 },
  { id: 11, name: "Lip Oil", price: 1200, category: "Lips", stock: 18 },
  { id: 12, name: "Compact Powder", price: 1800, category: "Face", stock: 14 },
  { id: 13, name: "Highlighter", price: 1500, category: "Face", stock: 16 },
  { id: 14, name: "Blush", price: 1300, category: "Face", stock: 20 },
  { id: 15, name: "Mascara", price: 1600, category: "Eyes", stock: 15 },
  { id: 16, name: "Eyeliner Pen", price: 900, category: "Eyes", stock: 18 },
  { id: 17, name: "Setting Spray", price: 1900, category: "Face", stock: 10 },
  { id: 18, name: "Concealer", price: 2100, category: "Face", stock: 12 },
  { id: 19, name: "Makeup Remover", price: 1300, category: "Skincare", stock: 10 },
  { id: 20, name: "Lip Gloss", price: 1000, category: "Lips", stock: 22 }
  ];

  return (
    <div className="p-4 row">
      <div className="d-flex justify-content-between align-items-center mb-3 col-12 col-sm-12 col-md-12 col-lg-12">
        <h3>Products</h3>
        <Link to="/admin/products/add" className="btn btn-primary">+ Add Product</Link>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={p.id}>
              <td>{index + 1}</td>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>Rs {p.price}</td>
              <td>{p.stock}</td>
              <td>
                <Link to={`/admin/products/edit/${p.id}`} className="btn btn-sm btn-warning me-2">Edit</Link>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ProductList;

