const express = require("express");
const cors = require("cors");
const { connectToDb, getDb } = require("./db");
const app = express();
app.use(cors());
let db;

connectToDb((err) => {
  if (!err) {
    console.log("Connected to the database");
    app.listen(1000, () => {
      console.log("Listening on port 1000");
    });
    db = getDb();
  } else {
    console.log("Error connecting to the database:", err);
  }
});

app.get("/api/bikes", (req, res) => {
  db.collection("bikes")
    .find()
    .toArray()
    .then((result) =>
      res
        .status(200)
        .send({ data: result, message: "data fetched successfully" })
    )
    .catch((err) => {
      res.status(500).json("internal error", err);
    });
});

const chartData = [
  { label: "Category A", value: 10 },
  { label: "Category B", value: 20 },
  { label: "Category C", value: 30 },
  { label: "Category D", value: 80 },
  { label: "Category E", value: 50 },
  { label: "Category F", value: 40 },
];

app.get("/api/chart", (req, res) => {
  res.status(200).json({ data: chartData });
});

app.get("/api/events", (req, res) => {
  db.collection("events")
    .find()
    .toArray()
    .then((result) => {
      res.status(200).send({ data: result });
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});
