const mongoose = require("mongoose");
// schema
// document,collection,database
const orderSchema = mongoose.Schema({
  Deposit: {
    type: Number,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  Description: {
    type: Array,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
});
// model is used to store data in database
const Order = mongoose.model("Order", orderSchema);
// exporting
module.exports = Order;
