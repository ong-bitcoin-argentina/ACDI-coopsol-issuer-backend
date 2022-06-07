const express = require("express");
const cors = require("cors");
const connect = require("./db/connect");
const routes = require("./routes/index");

const app = express();
app.use(cors())
const APP_PORT = process.env.PORT || 3001;
app.use(express.json());

routes(app);

app.use((err, req, res, next) => {

  if(err.name === "Unauthorized"){
    return res.status(401).send('Unauthorized');
  }
  //Use boom?
  if(err.name === "TokenExpiredError"){
    return res.status(401).send(err.message);
  }


  console.error(err.stack)
  res.status(500).send(err.message)
})

app.listen(APP_PORT, async () => {
  console.log(`App running on ${APP_PORT}`)
  await connect();
  console.log(`Db connected`);

})

