/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable object-curly-spacing */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51KFcBsAVjzb9hNmwvn5fuhM0Tr55dCihQeqRM0Di11FQJcjw7Z5YjwB18wP2INjTUVAUa3dMuTQfmjFfSuIO10VX00iAKfAVSc"
);

//App Config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.clientSecret,
  });
});
//Listener
exports.api = functions.https.onRequest(app);
//http://localhost:5001/fliataris-e-shop/us-central1/api
