const mongoose = require("mongoose");
// schema
// document,collection,database
const memberSchema = mongoose.Schema({
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
});
// model is used to store data in database
const Member = mongoose.model("Member", memberSchema);
// exporting
module.exports = Member;
