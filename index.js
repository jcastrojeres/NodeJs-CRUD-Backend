const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello Node");
});

mongoose
  .connect(
    "mongodb+srv://joshuacastrojeres9:anTFeOTdqslIOhzg@nodeapi.t2nu1j7.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=NodeAPI"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Failed to connect to the database");
  });
