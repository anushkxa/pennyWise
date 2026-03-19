require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors= require('cors');
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const {HoldingsModel} = require("./model/HoldingsModel");
const {OrdersModel} = require("./model/OrdersModel");

const {PositionsModel} = require("./model/PositionsModel");
const app = express();
app.use(cors());
app.use(bodyParser.json());

// app.get("/addPositions", async(req,res)=>{
//     let tempPositions = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

// tempPositions.forEach((item)=>{
//     let newPositions = new PositionsModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//     });
//     newPositions.save();
// })
// res.send("HEHEH");
// })


app.listen(PORT,()=>{
    console.log("Started");
    mongoose.connect(url);
    console.log("DB Connected");
})

app.get("/allHoldings",async(req,res)=>{
    let allHoldings= await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions",async(req,res)=>{
    let allPositions= await PositionsModel.find({});
    res.json(allPositions);
});

app.get("/allOrders",async(req,res)=>{
  let allOrders = await OrdersModel.find({});
  res.json(allOrders)
})

app.post('/newOrder', async (req, res) => {
  const { name, qty, price, mode } = req.body;

  try {
    let existing = await OrdersModel.findOne({ name });

    if (mode === "BUY") {
      if (existing) {
        existing.qty += qty;
        existing.price = price;
        await existing.save();
      } else {
        const newOrder= new OrdersModel({
          name,
          qty,
          price,
          avg: price,
        });
        await newOrder.save();
      }
      return res.json({ message: "Stock Bought" });
    }

    if (mode === "SELL") {
      if (!existing) {
        alert("Stock not found!")
      }

      if (existing.qty < qty) {
        alert("Not enough Quantity!")
      }

      existing.qty -= qty;

      if (existing.qty === 0) {
        await OrdersModel.deleteOne({ name });
        return res.json({ message: "Stock fully sold" });
        alert("Sold Successfully");
      } else {
        await existing.save();
        return res.json({ message: "Stock sold partially" });
      }
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



