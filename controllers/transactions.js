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

transactions.post("/", (req,res)=>{
  const {body} = req;
  transactionArray.push(body);
  const newEntry = transactionArray[transactionArray.length-1];
  res.json(newEntry);
})

transactions.delete("/:index",(req,res)=>{
  const {index} = req.params;
  if(isNaN(index)){
    res.json("invalid number")
    return;
  }else if(index <0 || index > transactionArray.length-1 ){
    res.json("index out of bounds")
    return;
  }
  const deletedTransaction = transactionArray.splice(index,1);
  res.json(deletedTransaction[0])
})

transactions.put("/:index",(req,res)=>{
  const {index} = req.params;
  const {body} = req;
  transactionArray[index] = body;
  res.json(transactionArray[index]);
})

module.exports = transactions; 
