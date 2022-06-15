const express = require("express");
const cors = require("cors");
const connect = require("./db/connect");
const routes = require("./routes/index");
const boom = require("@hapi/boom");

const app = express();
app.use(cors())
const APP_PORT = process.env.PORT || 3001;
app.use(express.json());

routes(app);

const isDev = true;
function withErrorStack(err, stack) {
  if(isDev) {
    return { ...err, stack };
  }
  return { ...err };
}


app.all("*", function (req, res, next) {
  next(boom.notFound());
});

app.use((err, req, res, next) => {
  if(boom.isBoom(err)){
    const { output: { statusCode, payload } } = err;
    res.status(statusCode).json(withErrorStack(payload, err.stack));
    next();
  } else {
    next(err);
  }
});


app.listen(APP_PORT, async () => {
  console.log(`App running on ${APP_PORT}`)
  await connect();
  console.log(`Db connected`);
  console.log(`Using issuer backend at: ${process.env.ISSUER_URI}`)

})

