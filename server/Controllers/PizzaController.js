const Pizza = require("../models/Pizza");

const AddPizza = async (req, res) => {
    try{
        const { name, description ,price, imageUrl } = req.body;

        if(!name || !description || !price) {
            return res.status(400).json({ message: "All Field are required! "});
        }

        const pizza = await Pizza.create({
            name,
            description,
            price,
            imageUrl,
        });

        res.status(201).json({ success: true, pizza, })

    }catch(err){
        res.status(500).json({ message: err.message });
        console.error(err);
    }
};

module.exports = { AddPizza };