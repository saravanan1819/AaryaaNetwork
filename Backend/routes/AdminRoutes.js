const express = require("express");
const router = express.Router();
const {
  register,
  loginAdmin,
  getGst,
  setGst,
  verifyToken,
} = require("../controllers/AdminController");


router.get('/check-auth',verifyToken);

router.post('/register', register);
router.post('/login', loginAdmin);
router.get("/get-gst", getGst);
router.post("/set-gst", setGst);
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false, // true if using HTTPS
    sameSite: "lax",
  });
  res.json({ message: "Logged out successfully" });
});


module.exports = router;
