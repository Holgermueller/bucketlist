const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const blRoutes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("tiny"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build/index.html"));
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/bucketListDatabase",
  { useNewUrlParser: true }
);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("db connection!");
});

app.use("/bucketList", blRoutes);

app.listen(PORT, () => {
  console.log(`==> API Server now listening on PORT ${PORT}`);
});
