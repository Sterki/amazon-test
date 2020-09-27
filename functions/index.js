const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HSNCfBzzhlp7ugoJck77XzcV9XWRmaQ0FqelLHqA9v5IhZuD1kJuZhhXl7INzpAkLh7oZ0aFZDAObZjPYs170O7008YewUjWA"
);

// API

// app config
const app = express();

// middelwares using cores etc...
app.use(cors({ origin: true }));
app.use(express.json());
// API ROUTES

app.get("/", (req, res) => {
  res.status(200).send("hellow world");
});

// app.get("/apialex", (req, res) => {
//   res.status(200).send("hellow Alex");
// }); >>>> to use this end points u just need to create ur own route example
// /api/apialex

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request recieved Boomm!! ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // oOK -CREATED
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// APP.LISTEN (LISTEN COMMAND ...)

exports.api = functions.https.onRequest(app);

// example end point it's a default end point to test
//http://localhost:5001/clone-c9ca0/us-central1/api
