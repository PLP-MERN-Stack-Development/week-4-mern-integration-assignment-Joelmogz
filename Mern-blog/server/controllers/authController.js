const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  const exists = await User.findOne({ username, email });
  if (exists) return res.status(400).json({ message: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashed });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
};

const login = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findOne({ username, email });
  if (!user) return res.status(404).json({ message: "User Not Found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Incorrect Password" });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
};

module.exports = {
  signUp,
  login,
};
