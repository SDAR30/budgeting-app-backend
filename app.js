const express = require("express");
const cors = require('cors');
const transactionsController = require("./controllers/transactions");

const app = express();
app.use(express.json()); //adds "body" to the text
app.use(cors());

app.use((req,res,next)=>{
  next();
})

app.use("/transactions", transactionsController);

// ROOT
app.get("/", (req, res) => {
  res.send("Budgeting APP - BackEnd");
});

app.get("/*",(req,res)=>{
  res.status(404).send("ERROR -  WRONG PAGE")
})

module.exports = app;
