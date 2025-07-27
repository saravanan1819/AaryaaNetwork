const Admin = require("../models/Admin");

module.exports = async (req, res, next) => {
  try {
    const adminUser = await Admin.findById(req.user.id);
    if (!adminUser || adminUser.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }
    next();
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
