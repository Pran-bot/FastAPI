const express = require("express");
const { chatHandler } = require('../../Controllers/AIchatcontroller.js')
const ai_router = express.Router();

ai_router.post('/ai-chat/', chatHandler);

module.exports = ai_router;