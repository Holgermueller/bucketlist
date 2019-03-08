const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('tiny'));

app.use(compression());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`==> API Server now listening on PORT ${PORT}`);
});
