const express = require('express');
const cors = require('cors');
const products = require('./data/products');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so the React app can access the API
app.use(cors());
app.use(express.json());

// Get all products (with optional category filter)
app.get('/api/products', (req, res) => {
  const { category } = req.query;
  if (category) {
    const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    return res.json(filtered);
  }
  res.json(products);
});

// Get a single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// Handle mock newsletter registration
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }
  
  console.log(`Newsletter subscription received: ${email}`);
  
  res.status(200).json({ 
    message: 'Thank you for subscribing to Miraya. An invitation to our next collection preview has been sent to your inbox.' 
  });
});

// Handle mock checkout order submission
app.post('/api/orders', (req, res) => {
  const { cartItems, customerDetails } = req.body;
  
  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: 'Your shopping bag is empty.' });
  }
  
  if (!customerDetails || !customerDetails.email || !customerDetails.name) {
    return res.status(400).json({ message: 'Customer details are incomplete.' });
  }
  
  const orderId = `MIR-${Math.floor(100000 + Math.random() * 900000)}`;
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  console.log(`Mock order placed: ${orderId}, Total: ₹${totalAmount}, Customer: ${customerDetails.name}`);
  
  res.status(201).json({
    message: 'Order placed successfully. Thank you for shopping with Miraya.',
    orderId,
    total: totalAmount,
    deliveryDays: 5
  });
});

app.listen(PORT, () => {
  console.log(`Miraya premium backend server running on port ${PORT}`);
});

