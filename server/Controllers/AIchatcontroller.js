const askAI = require("../services/aiservice")

const chatHandler = async (req, res) => {
    const { message } = req.body;

    const reply = await askAI(message);

    res.json({ reply });
};

module.exports = {chatHandler};