const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const print = console.log;

const app = express();
const PORT = process.env.PORT || 3000;
const router = require("./routes/router");

app.use(express.static(path.join(__dirname, "../", "client")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, err => {
  if (err) throw err;
  print("connected on port ", PORT);
});
