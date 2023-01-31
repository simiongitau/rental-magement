const express = require("express");
const router = express.Router();
const {
  getAllmember,
  updateMember,
  DeleteMember,
  createMember,
} = require("../controler/register");
router.get("/member", getAllmember);
router.post("/create/member", createMember);
// updating the deliverli information
router.patch("/member/update/:id", updateMember);
// delete method
router.delete("/member/delete/:id", DeleteMember);

//  exp
module.exports = router;
