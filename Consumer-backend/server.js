const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
const logRoutes = require("./routes/logRoutes");

const consumeMessages = require("./consumer");
console.log(consumeMessages());
app.use(express.json());
app.use(logRoutes);

app.listen(8081, () => {
  console.log("server listening on 8081");
});
