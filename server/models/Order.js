const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({

}, { timestamps: true })

const OrderModel = mongoose.model('orders', OrderSchema)
module.exports = OrderModel;