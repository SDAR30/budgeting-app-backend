const express = require("express");
const cors = require('cors');
const transactionsController = require("./controllers/transactions");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/transactions", transactionsController);

// ROOT
app.get("/", (req, res) => {
  res.send("Basic Express App - HOME");
});

module.exports = app;
