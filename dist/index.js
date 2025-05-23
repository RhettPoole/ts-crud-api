"use strict";
// Express runs on Node.js
// Express is used for building a backend web framework, can be used for RestAPI's, Access databases, and build servers.
// React is used for routing and building user interfaces, used to build the client-side.
// Used to accept requests from users (get, post, put, delete) and responds (json, error msgs, html). It can also be used for routing.
// Plan for app, imports, create instance of server, use json for requests, define products, set up array, routing, start server.
// Typical structure for express apps below
// 1- Imports
// 2- Create app instance
// 3- Add middleware for parsing data
// 4- Define product class
// 5- Set up the in-memory product list and ID counter
// 6- Write the routes
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
// 1, request/response are TS types that help define what kind of objects we are working with when a request/response comes in.
const express_1 = __importDefault(require("express"));
// 2, creates our Express app. Think walkie-talkie that listens for requests on the backend
const app = (0, express_1.default)();
// 3, tells our app to parse the JSON request and put it in "req.body". (Middleware acts as a bridge between OS, a database, and apps)
app.use(express_1.default.json());
// 4, note - JS and TS use "number" instead of "int". This covers all numeric data types.
// This essentially states, "A product is an object with a number id, string name, and number price."
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
// 5, Declares an array of products to hold all data, baseically a temporary and local database.
let products = [];
let idCounter = 1;
// 6, app.post handles http requests for routing. -> app.post(path*in this case /products*, callback)
// This allows us to add products to the array.
app.post("/products", (req, res) => {
  const { name, price } = req.body;
  // Validation
  // || is a logical or. If (thing or thing or...)
  if (
    !name ||
    typeof name !== "string" ||
    price == null ||
    typeof price !== "number" ||
    price < 0
  ) {
    // if there's any issues then return string below. "400" is the default bad request error msg
    return res.status(400).json({ message: "Invalid product data" });
  }
  // Create product with auto incrementing id, consume and add the name and price and new id to the array.
  const newProduct = new Product(idCounter++, name, price);
  // Add product to the array.
  products.push(newProduct);
  // "201" is the default "created" status code.
  res.status(201).json(newProduct); // Return the created product with status 201 (Created)
});
// Route to find all products
app.get("/products", (req, res) => {
  res.json(products);
});
// Helper function that throws an error in the terminal/browser if product isn't found
function getProductOrThrow(id) {
  const product = products.find((p) => p.id === id);
  if (!product) {
    throw new Error(`Product with ID ${id} not found`);
  }
  return product;
}
// Route to find product by ID using exception handling
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // Error handling
  try {
    const product = getProductOrThrow(id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
// Assign port that our server is running on
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
