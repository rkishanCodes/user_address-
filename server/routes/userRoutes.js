const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Address = require("../models/Address");

router.post("/register", async (req, res) => {
  const { name, address } = req.body;

  try {
    let user = await User.findOne({ name });

    if (!user) {
      user = new User({ name });
      await user.save();
    }

    const newAddress = new Address({
      userId: user._id,
      address,
    });
    await newAddress.save();

    res.status(201).json({ user, address: newAddress });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/addresses", async (req, res) => {
  const { name } = req.query;

  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const addresses = await Address.find({ userId: user._id });
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
