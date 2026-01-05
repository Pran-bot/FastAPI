const express = require("express");
const { AddPizza, UpdatePizza, GetAllPizzas, GetPizzaById, DeletePizza } = require("../../Controllers/PizzaController.js");
const upload = require("../../Middlewares/Upload.js");
const protect = require("../../Middlewares/Auth.js");
const adminOnly = require("../../Middlewares/AdminMiddleware.js");
const auth = require("../../Middlewares/Auth.js")

const pizza_router = express.Router();

pizza_router.post("/addpizza", protect, adminOnly, upload.single("image"), AddPizza);
pizza_router.patch("/updatepizza/:id", protect, adminOnly, upload.single("image"), UpdatePizza);
pizza_router.get("/getallpizzas", protect , auth, GetAllPizzas);
pizza_router.get("/getpizza/:id", protect, auth, GetPizzaById);
pizza_router.delete("/deletepizza/:id", protect, adminOnly, DeletePizza);

module.exports = pizza_router;