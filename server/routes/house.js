const express = require("express");
const router = express.Router();
// import
const {
  getAllHouse,
  createHouse,
  updateHouse,
  DeleteHouse,
} = require("../controler/house");
// fetching user data
router.get("/house", getAllHouse);
// user
router.post("/house/create", createHouse);

// updating the user
router.patch("/house/update/:id", updateHouse);

// delete method
router.delete("/house/delete/:id", DeleteHouse);
//  exp
module.exports = router;
