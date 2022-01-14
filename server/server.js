const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e.message));

app.use(morgan());
app.use(bodyParser.json({ limit: "3mb" }));
app.use(cors());

fs.readdirSync("./routes").map((r) =>
  app.use("/api", require("./routes/" + r))
);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`connected and listening on ${port}`));
