import express from "express";
import mongoose from "mongoose";
import companyRoutes from './infrastructure/http/routes/company.route';
import "dotenv/config";

const app = express()

app.use(express.json())

app.use("/api/companies", companyRoutes)

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/yourdbname"

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error)
    process.exit(1)
  })

export default app;

