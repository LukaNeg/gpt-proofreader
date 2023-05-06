const express = require("express");
require("dotenv").config(); // configure dotenv
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`starting server at ${port}`);
});
app.use(express.static('public'));