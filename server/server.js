const express = require('express');
const cors = require('cors');
const products = require('./data/products');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Get all products (retained for React client integration)
app.get('/api/products', (req, res) => {
  const { category } = req.query;
  if (category) {
    const normalize = (str) => {
      if (!str) return '';
      return str
        .toLowerCase()
        .replace(/[- ]/g, '')
        .replace(/suits?$/, '')
        .replace(/s$/, '');
    };
    const normCategoryQuery = normalize(category);
    const filtered = products.filter(p => {
      const normCat = normalize(p.category);
      const normColl = normalize(p.collection || '');
      return normCat.includes(normCategoryQuery) || normCategoryQuery.includes(normCat) || (normColl && normColl.includes(normCategoryQuery));
    });
    return res.json(filtered);
  }
  res.json(products);
});

// GET /api/collections (Dynamic serving endpoint)
app.get('/api/collections', (req, res) => {
  res.json({
    count: products.length,
    items: products
  });
});

// GET a single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Creation not found.' });
  }
  res.json(product);
});

// POST /api/inquiries (Store form records in the inquiries database table)
app.post('/api/inquiries', async (req, res) => {
  const { name, email, message, type = 'general', details } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  try {
    const result = await db.query(
      'INSERT INTO inquiries (name, email, message, type, details) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name || null, email, message || null, type, details ? JSON.stringify(details) : null]
    );

    res.status(201).json({
      message: 'Inquiry registered successfully.',
      inquiry: result.rows[0]
    });
  } catch (err) {
    console.error('Error inserting inquiry:', err);
    res.status(500).json({ message: 'Database error processing your inquiry.' });
  }
});

// POST /api/newsletter (Intercept and store in inquiries DB table)
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  try {
    await db.query(
      'INSERT INTO inquiries (name, email, message, type, details) VALUES ($1, $2, $3, $4, $5)',
      [null, email, 'Newsletter Subscription', 'newsletter', null]
    );

    res.status(200).json({
      message: 'Thank you for subscribing to Miraya. An invitation to our next collection preview has been sent to your inbox.'
    });
  } catch (err) {
    console.error('Error saving newsletter subscriber:', err);
    res.status(500).json({ message: 'Database error processing your subscription.' });
  }
});

// POST /api/orders (Intercept checkouts and store in inquiries DB table)
app.post('/api/orders', async (req, res) => {
  const { cartItems, customerDetails } = req.body;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: 'Your shopping bag is empty.' });
  }

  if (!customerDetails || !customerDetails.email || !customerDetails.name) {
    return res.status(400).json({ message: 'Customer details are incomplete.' });
  }

  const orderId = `MIR-${Math.floor(100000 + Math.random() * 900000)}`;
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  try {
    await db.query(
      'INSERT INTO inquiries (name, email, message, type, details) VALUES ($1, $2, $3, $4, $5)',
      [
        customerDetails.name,
        customerDetails.email,
        `Order checkout request: ${orderId}`,
        'order',
        JSON.stringify({ orderId, total: totalAmount, items: cartItems })
      ]
    );

    res.status(201).json({
      message: 'Order checkout inquiry submitted. A design consultant will contact you shortly.',
      orderId,
      total: totalAmount,
      deliveryDays: 5
    });
  } catch (err) {
    console.error('Error saving order inquiry:', err);
    res.status(500).json({ message: 'Database error processing your order.' });
  }
});

module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Miraya premium backend server running on port ${PORT}`);
  });
}
