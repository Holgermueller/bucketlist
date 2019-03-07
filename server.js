const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`==> API Server now listening on PORT ${PORT}`);
});
