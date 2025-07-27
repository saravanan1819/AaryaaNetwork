const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

connectDB();

const InternetPlanRoutes = require("./routes/InternetPlanRoutes");
app.use("/api/plans", InternetPlanRoutes);

const AdminRoutes = require("./routes/AdminRoutes");
app.use("/api/admin", AdminRoutes);

const adminSettingsRoutes = require("./routes/SettingsRoutes");
app.use("/api/admin/settings", adminSettingsRoutes);

const contactRoutes=require("./routes/ContactRoutes");
app.use("/api/contact",contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
