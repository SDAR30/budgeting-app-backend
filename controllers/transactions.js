const transactions = require("express").Router();
const transactionArray = require("../models/transaction.js");

transactions.get("/", (req, res) => {
  res.json(transactionArray);
});

module.exports = transactions; 
