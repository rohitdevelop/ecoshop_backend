import express from 'express';
import dotenv from "dotenv";
// import connectDB from "./src/detabase/db.js"; // ✅ Make sure folder is "database"
import productRoutes from "./src/routes/productRoutes.js";
import catageryRoutes from "./src/routes/catageryRoutes.js";
import cors from "cors";
// ........................................................................................................
import dummyProducts from './src/DumyDeta/products.js';
const { personalBodyCareProducts, homeKitchenProducts, giftsProducts } = dummyProducts;
import dumycategories from './src/DumyDeta/categories.js';
// .........................................................................................................

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
// connectDB();

// ✅ API routes
app.use("/api/products", productRoutes);
app.use("/api/categories", catageryRoutes);

//  .........................................................................................................................
const dumyproducts = [
  ...personalBodyCareProducts,
  ...homeKitchenProducts,
  ...giftsProducts
];

// Get all dummy products
app.get('/dumyproducts', (req, res) => {
  res.json({ success: true, data: dumyproducts, count: dumyproducts.length });
});

// Get product by ID
app.get('/dumyproducts/:id', (req, res) => {
  const product = dumyproducts.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json({ success: true, data: product });
  } else {
    res.status(404).json({ success: false, message: 'Product not found' });
  }
});

// Get products by category
app.get('/dumyproducts/category/:category', (req, res) => {
  const filtered = dumyproducts.filter(
    p => p.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json({ success: true, data: filtered, count: filtered.length });
});

// Get all categories
app.get('/dumycategories', (req, res) => {
  res.json({ success: true, data: dumycategories, count: dumycategories.length });
});

// ✅ Home & Kitchen Products (4 items)
app.get('/homeKitchenProducts', (req, res) => {
  try {
    const products = dumyproducts
      .filter(p => p.category.toLowerCase() === "home & kitchen".toLowerCase())
      .slice(0, 4);

    res.json({ success: true, data: products, count: products.length });
  } catch (error) {
    console.error("Error fetching home kitchen products:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});


// ✅ Personal & Body Care Products (4 items)
app.get('/personalBodyCareProducts', (req, res) => {
  try {
    const products = dumyproducts
      .filter(p => p.category.toLowerCase() === "personal & body care".toLowerCase())
      .slice(0, 4);

    res.json({ success: true, data: products, count: products.length });
  } catch (error) {
    console.error("Error fetching personal body care products:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});


// ✅ Gifts Products (4 items)
app.get('/giftsProducts', (req, res) => {
  try {
    const products = dumyproducts
      .filter(p => p.category.toLowerCase() === "gifts".toLowerCase())
      .slice(0, 4);

    res.json({ success: true, data: products, count: products.length });
  } catch (error) {
    console.error("Error fetching gifts products:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});



// .........................................................................................................................................


// ✅ Server start
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
