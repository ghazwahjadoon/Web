import Product from "../models/Product.js";


export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    const newProduct = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      stock: Number(stock),
      image: req.file ? req.file.filename : null,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error); // <-- log error
    res.status(500).json({ error: error.message });
  }
};
export const getProducts = async (req, res) => {
  const products = await Product.find();
 
  res.json(products);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.json({ message: "Product deleted" });
};
