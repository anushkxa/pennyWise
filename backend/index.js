require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const { holdings } = require('../dashboard/src/data/data');
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const {HoldingsModel} = require("./model/HoldingsModel");
const {OrdersModel} = require("./model/OrdersModel");

const {PositionsModel} = require("./model/PositionsModel");
const app = express();

app.get("/addPositions", async(req,res)=>{
    let tempPositions = [
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
];

tempPositions.forEach((item)=>{
    let newPositions = new PositionsModel({
        product: item.product,
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day,
        isLoss: item.isLoss,
    });
    newPositions.save();
})
res.send("HEHEH");
})


app.listen(PORT,()=>{
    console.log("Started");
    mongoose.connect(url);
    console.log("DB Connected");
})