const Rental = require("../model/order");
exports.getAllRental = async (req, res) => {
  // find is used to retrive or fetch data from the mongo db
  const rental = await Rental.find();
  if (!rental) {
    return res.status(404).json({
      success: false,
      message: "rental does not exist",
    });
  }
  return res.json({ success: true, rental });
};
exports.createRental = async (req, res) => {
  // creating new object
  try {
    const rental = new Rental(req.body);
    console.log(rental);
    await rental.save();
    return res.status(200).json({ success: true, rental });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateRental = async (req, res, next) => {
  try {
    const rental = await Rental.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // condition if use exist
    if (!rental) {
      return res.status(404).json({
        success: false,
        message: "rental does not exist",
      });
    }
    return res.json({ success: true, rental });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteRental = async (req, res) => {
  try {
    const rental = await Rental.findByIdAndDelete(req.params.id);
    if (!rental) {
      return res.status(404).json({
        success: false,
        message: "rental does not exist",
      });
    }
    return res.json({ success: true, rental });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
