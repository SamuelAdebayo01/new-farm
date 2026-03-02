const express = require("express");
const path = require("path");

const app = express();

/* TEMP PRODUCT DATA */
const products = [
  {
    slug: "cucumber",
    name: "Cucumber",
    price: "₦700 – ₦15,000",
    image: "/images/cucumber.jpg",
    description: "Freshly grown cucumbers cultivated under healthy conditions."
  },
  {
    slug: "tomatoes",
    name: "Tomatoes",
    price: "₦1,000 – ₦20,000",
    image: "/images/tomatoe.jpg",
    description: "Organic tomatoes rich in taste and nutrients."
  },
  {
    slug: "sweet-corn",
    name: "Sweet Corn",
    price: "₦500 – ₦10,000",
    image: "/images/sweetcorn.jpg",
    description: "Naturally grown sweet corn harvested fresh from our farm."
  },
  {
    slug: "broiler-chicken",
    name: "Broiler Chicken",
    price: "₦5,000+",
    image: "/images/broiler.jpg",
    description: "Healthy farm-raised broiler chickens."
  }
];

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

/* ROUTES */

app.get("/", (req, res) => {
  res.render("index", { products, currentPage: "home" });
});

app.get("/about", (req, res) => {
  res.render("about", { currentPage: "about" });
});

app.get("/products", (req, res) => {
  res.render("products", { products, currentPage: "products" });
});

app.get("/products/:slug", (req, res) => {
  const product = products.find(p => p.slug === req.params.slug);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.render("product-details", { product, currentPage: "products" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { currentPage: "contact" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running → http://localhost:${PORT}`);
});