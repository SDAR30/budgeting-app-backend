const transactions = require("express").Router();
const transactionArray = require("../models/transaction.js");

transactions.get("/", (req, res) => {
  res.json(transactionArray);
});

transactions.get("/:index",(req,res)=>{
    const {index} = req.params;
    const transaction = transactionArray[index];
    transaction ? res.json(transaction) : res.redirect("/No-page-here")
})

module.exports = transactions; 
