const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.listen(5000, () => console.log("Server is running"));

module.exports = app;
