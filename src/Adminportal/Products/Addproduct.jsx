import { useState } from "react";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Product Added!");
  };

  return (
    <div className="p-4">
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="name" placeholder="Product Name" onChange={handleChange} />
        <textarea className="form-control mb-2" name="description" placeholder="Description" onChange={handleChange}></textarea>
        <input className="form-control mb-2" name="price" placeholder="Price" type="number" onChange={handleChange} />
        <input className="form-control mb-2" name="category" placeholder="Category" onChange={handleChange} />
        <input className="form-control mb-2" name="stock" placeholder="Stock" type="number" onChange={handleChange} />
        <input className="form-control mb-3" type="file" name="image" onChange={handleChange} />
        <button className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
}
export default AddProduct;
