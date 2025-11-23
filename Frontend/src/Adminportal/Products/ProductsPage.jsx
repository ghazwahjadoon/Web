import { useState } from "react";
import AddProduct from "./Addproduct";
import ProductList from "./ProductList";
import UpdateProduct from "./UpdateProduct";

function ProductsPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "Lipstick", price: "1200pkr", category: "Makeup", stock: 20, description: "Smooth and long-lasting" },
    { id: 2, name: "Foundation", price: "2500 pkr", category: "Face", stock: 10, description: "Full coverage" },
    { id: 3, name: "Perfume", price: "3500pkr", category: "Fragrance", stock: 5, description: "Elegant scent" },
    { id: 4, name: "Tube Foundation", price: "2200pkr", category: "Face", stock: 15, description: "Lightweight formula" },
    { id: 5, name: "Lip Pencil", price: "800pkr", category: "Lips", stock: 25, description: "Smooth application" },
  ]);

   const [selectedProduct, setselectedProduct]=useState(null);
//function to add new product to the products list
  const addProduct = (newProduct) => {
    setProducts([
      ...products,
      { ...newProduct, id: Date.now() } // safer unique id
    ]);
  };
 
  const DeleteProduct=(id)=>{
    const updatedProducts=products.filter((product)=>product.id!==id);
    setProducts (updatedProducts);
  }
 //saved the product we want to update
  const handleUpdate=(product)=>{
    setselectedProduct(product);
  }
//upfated prodcut
  const updateProduct=(updatedProduct)=>{
    const newList = products.map((p) =>
    p.id === updatedProduct.id ? updatedProduct : p
  );

  setProducts(newList);
  setselectedProduct(null);
  }

  return (
    <div>
      <AddProduct addProduct={addProduct} />
      <ProductList products={products} DeleteProduct={DeleteProduct} UpdateProduct={handleUpdate} />
      {selectedProduct && (
  <UpdateProduct product={selectedProduct} onUpdate={updateProduct} />
)}
    </div>
  );
}

export default ProductsPage;
