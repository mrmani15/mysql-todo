const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/todo"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running at ${PORT}`));
