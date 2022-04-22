const express = require("express");
const cors = require("cors");
const connect = require("./db/connect");
const routes = require("./routes/index");
const di = require("./di");

const DidiIssuerSdk = require("./libs/DidiIssuerSdk");

const app = express();
app.use(cors())
const APP_PORT = process.env.PORT || 3000;
app.use(express.json());

routes(app);

app.listen(APP_PORT, async () => {
  console.log(`App running on ${APP_PORT}`)
  await connect();
  console.log(`Db connected`);

})


