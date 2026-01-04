import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/innerwear_store", {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    console.log(`✓ MongoDB connected successfully`);
    console.log(`  Host: ${conn.connection.host}`);
    console.log(`  Database: ${conn.connection.name}`);
    
    return conn;
  } catch (error) {
    console.error(`✗ MongoDB connection failed:`);
    console.error(`  Error: ${error.message}`);
    console.error(`  Make sure MongoDB is running on 127.0.0.1:27017`);
    console.error(`  Install MongoDB or use MongoDB Atlas cloud service`);
    
    // Don't exit - allow server to run without database
    // process.exit(1);
  }
};

export default connectDB;
