const Member = require("../model/register");
exports.getAllmember = async (req, res) => {
  // find is used to retrive or fetch data from the mongo db
  const member = await Member.find();
  if (!member) {
    return res.status(404).json({
      success: false,
      message: "member does not exist",
    });
  }
  return res.json({ success: true, member });
};
// getting all the admin
exports.createMember = async (req, res) => {
  console.log(req.body);
  try {
    const member = new Member(req.body);
    console.log(member);
    await member.save();
    return res.status(200).json({ success: true, member });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateMember = async (req, res, next) => {
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // condition if use exist
    if (!member) {
      return res.status(404).json({
        success: false,
        message: "member does not exist",
      });
    }
    return res.json({ success: true, member });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.DeleteMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) {
      return res.status(404).json({
        success: false,
        message: "member does not exist",
      });
    }
    return res.json({ success: true, member });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
