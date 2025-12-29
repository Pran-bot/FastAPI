const express = require("express")
const { AddPizza } = require("../../Controllers/PizzaController.js")
const upload = require("../../Middlewares/Upload.js")

const pizza_router = express.Router();

pizza_router.post("/addpizza", upload.single("image"), AddPizza);

module.exports = pizza_router;