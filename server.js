import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
import productRoutes from "./src/routes/productRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ CONNECT DB FIRST
await connectDB();

// THEN routes
app.use("/api/products", productRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
