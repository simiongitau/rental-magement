const express = require("express");
const router = express.Router();
const {
  getAllRental,
  updateRental,
  deleteRental,
  createRental,
} = require("../controler/order");
router.get("/rental", getAllRental);
router.post("/create/rental", createRental);
// updating the deliverli information
router.patch("/rental/update/:id", updateRental);
// delete method
router.delete("/rental/delete/:id", deleteRental);

//  exp
module.exports = router;
