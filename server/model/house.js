const mongoose = require("mongoose");
// schema
// document,collection,database
const houseSchema = mongoose.Schema({
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
const House = mongoose.model("House", houseSchema);
// exporting
module.exports = House;
