import express from 'express';
import dotenv from "dotenv";
import MongoDB from "./src/detabase/db.js"
// import productRoutes from "./src/routes/productRoutes.js";
// import categoryRoutes from "./src/routes/catageryRoutes.js";
import cors from "cors"
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
MongoDB()
// API routes
// app.use("/api/products", productRoutes);
// app.use("/api/categories", categoryRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
