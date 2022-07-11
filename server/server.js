const express = require("express");

const app = express();

// DB connection
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1/ce-mern-app1", { useNewUrlParser: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

// Model
const Coaster = require("./Models/Coaster.model");

// Routing
app.get("/", (req, res) =>
  res.json({
    message: "Hello World!",
    date: new Date().toISOString(),
    campus: "Santiago",
  })
);

app.get("/api/v1/coasters", (req, res) =>
  Coaster.find()
    .then((coasters) => res.json(coasters))
    .catch((err) => res.json(err))
);

app.get("/api/v1/coaster/:coaster_id", (req, res) => {
  const { coaster_id } = req.params;

  Coaster.findById(coaster_id)
    .then((coaster) => res.send(coaster))
    .catch((err) => res.json(err));
});

// Listen
app.listen(9000, () => {
  console.log("listening on port 9000");
});
