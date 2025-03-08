const express = require("express");
const cors = require("cors");
const products = require("./data.json");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/products", (req,res) => {
    console.log(req.products)
    res.json(products);
});

app.listen(port, () => {
    console.log(`Prodcut server is running on http://localhost:${port}`);
});

