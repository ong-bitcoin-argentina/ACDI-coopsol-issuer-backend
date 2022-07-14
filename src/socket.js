
const http = require("http");
const jwt = require("jsonwebtoken");
const { Server } = require("socket.io");
const { emitter } = require("./di");

const createServer = app => {

  const server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });


  io.use((socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      next();
    } catch (err) {
      if(err instanceof jwt.TokenExpiredError){
        console.log(`[${new Date().toISOString()}][Socket] jwt expired`)
        next(new Error("TokenExpiredError"))
      } else {
        console.log(err);
      }

      next(err);
    }
  })


  io.on("connection", (socket) => {
    console.log(`Connected: ${socket.id}`)
  });


  emitter.on("producer-did-associated", payload => {
    io.emit("producer-did-associated", payload)
  });


  return server;
}


module.exports = createServer;