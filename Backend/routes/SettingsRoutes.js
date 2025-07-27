const express = require("express");
const router = express.Router();
const { addAdmin , changePassword, requestEmailChangeOtp, verifyOtpAndUpdateEmail} = require("../controllers/SettingsController");

router.post("/add", addAdmin); 
router.post("/change-password", changePassword);
router.post("/change-email/request-otp", requestEmailChangeOtp);
router.post("/change-email/verify-and-update", verifyOtpAndUpdateEmail);

module.exports = router;
