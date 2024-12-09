import express from "express";
import dotenv from "dotenv"
import {connectDB} from "./config/db.js"

import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();

// app.get("/products", (req, res) => {
//     res.send("Server is ready.")
// });
app.use(express.json()); //allow us to accept json data in the request body

app.use("/api/products", productRoutes)

app.listen(3000, () => {
    connectDB();
    console.log("server started at http://localhost:3000")
});
