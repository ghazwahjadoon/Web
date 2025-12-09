import Cart from "../models/cart.js";

export const addToCart = async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.body;

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = await Cart.create({
      userId,
      items: [{ productId, quantity: 1 }]
    });
  } else {
    const item = cart.items.find(i => i.productId == productId);
    if (item) item.quantity++;
    else cart.items.push({ productId });
  }

  await cart.save();
  res.json(cart);
};

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate("items.productId");
  res.json(cart || { items: [] });
};

export const removeFromCart = async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.params;

  const cart = await Cart.findOne({ userId });

  cart.items = cart.items.filter(i => i.productId != productId);
  await cart.save();

  res.json(cart);
};
