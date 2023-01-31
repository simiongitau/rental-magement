const House = require("../model/house");
exports.getAllHouse = async (req, res) => {
  // find is used to retrive or fetch data from the mongo db
  const house = await House.find({ role: "user" });
  if (!house) {
    return res.status(404).json({
      success: false,
      message: "house does not exist",
    });
  }
  return res.json({ success: true, house });
};

exports.createHouse = async (req, res) => {
  console.log(req.body);
  try {
    const house = new House(req.body);
    console.log(house);
    await house.save();
    return res.status(200).json({ success: true, house });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateHouse = async (req, res, next) => {
  // Verifying if the value of role is admin
  try {
    const house = await House.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // condition if use exis
    return res.json({ success: true, house });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.DeleteHouse = async (req, res) => {
  try {
    const house = await House.findByIdAndDelete(req.params.id);
    if (!house) {
      return res.status(404).json({
        success: false,
        message: "house does not exist",
      });
    }
    return res.json({ success: true, house });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
