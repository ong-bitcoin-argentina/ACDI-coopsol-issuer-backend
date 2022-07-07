const express = require("express");
const cors = require("cors");
const connect = require("./db/connect");
const routes = require("./routes/index");
const boom = require("@hapi/boom");
const createServer = require("./socket");

const di = require("./di")

const app = express();
app.use(cors())
const APP_PORT = process.env.PORT || 3001;
app.use(express.json());

routes(app);

const isDev = true;
function withErrorStack(err, stack) {
  if (isDev) {
    return { ...err, stack };
  }
  return { ...err };
}


app.all("*", function (req, res, next) {
  next(boom.notFound());
});

app.use((err, req, res, next) => {
  if (boom.isBoom(err)) {
    const { output: { statusCode, payload } } = err;
    res.status(statusCode).json(withErrorStack(payload, err.stack));
    next();
  } else {
    next(err);
  }
});

const server = createServer(app);

server.listen(APP_PORT, async () => {
  try {
    console.log(`Coopsol server running on ${APP_PORT}`)
    const client = await connect();
    const conn = client.connections[0];
    console.log(`Db [${conn.name}] at ${conn.host} connected`);
    console.log(`Using issuer backend at: ${process.env.ISSUER_URI}`)

    bootstrap();




  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})



async function bootstrap() {
  try {

    const { COOPSOL_CREATE_USER, COOPSOL_BACKEND_USER, COOPSOL_BACKEND_PASSWORD } = process.env;

    const createUser = (COOPSOL_CREATE_USER.toLowerCase() === 'true');

    if (createUser) {

      const exist = await di.authService.findOne({ email: COOPSOL_BACKEND_USER });

      if (exist) {//First check if user exists
        //  console.log(`User ${COOPSOL_BACKEND_USER} already exists`);
        return;
      }

      const result = await di.authService.signup({
        email: COOPSOL_BACKEND_USER,
        roles: ["ADMIN"],
        password: COOPSOL_BACKEND_PASSWORD
      })

      console.log(result);
      console.log(`Bootstrap user [${result.email}] created`)
    }
  } catch (err) {
    console.log(err);
  }

}