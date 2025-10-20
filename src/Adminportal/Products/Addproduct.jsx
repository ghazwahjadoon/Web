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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-4">
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="name"
          placeholder="Product Name"
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        <textarea
          className="form-control mb-2"
          name="description"
          placeholder="Description"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        ></textarea>
        <input
          className="form-control mb-2"
          name="price"
          placeholder="Price"
          type="number"
          onChange={(e) =>
            setFormData({ ...formData, price: e.target.value })
          }
        />
        <input
          className="form-control mb-2"
          name="category"
          placeholder="Category"
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        />
        <input
          className="form-control mb-2"
          name="stock"
          placeholder="Stock"
          type="number"
          onChange={(e) =>
            setFormData({ ...formData, stock: e.target.value })
          }
        />
        <input
          className="form-control mb-3"
          type="file"
          name="image"
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.files[0] })
          }
        />
        <button className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
