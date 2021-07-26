const express = require("express");
const app = express();

const index = require("./routes/index");
const contacts = require("./routes/toDoRoutes");

app.use(express.json());

app.use("/", index);
app.use("/contatos", contacts);

module.exports = app;