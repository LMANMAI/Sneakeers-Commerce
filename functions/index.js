const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Jp1cRH4WC8gFLmqRde4pq2Y6N66H5NcMiOKZAQQYOIubw8WniZo5IdF6n0kkl8tikfI8VHpdQPburMHl4zPqJuy00diRjdtgK"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello PERRO"));

exports.api = functions.https.onRequest(app);

//http://localhost:5001/sneakers-commerce/us-central1/api
