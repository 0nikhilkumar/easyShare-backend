const express = require("express");
const dbConnect = require("./config/db");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());
dbConnect();

// Cors
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS
}
app.use(cors(corsOptions));

// template engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));



app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
