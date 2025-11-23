import { useState } from "react";
import { addProductAPI } from "../../Service/Api";

function AddProduct({ addProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    addProduct({
      ...formData,
      
    });//sent eneterd data to ProductsPage.jsx

    await addProductAPI(formData); // Call the API to add product
4
    setFormData({ name: "", description: "", price: "", category: "", stock: "" }); // Reset form
  };

  return (
    <div className="p-4">
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Product Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <textarea
          className="form-control mb-2"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        ></textarea>
        <input
          className="form-control mb-2"
          
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <input
          className="form-control mb-2"
          placeholder="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        />
        <input
          className="form-control mb-2"
          type="number"
          placeholder="Stock"
          value={formData.stock}
          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
          required
        />
        <button className="btn btn-success" type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
