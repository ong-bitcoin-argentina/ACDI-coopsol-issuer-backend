const infoRouter = require("./api/info");
const authRouter = require("./api/auth");
const dniIdentitiesRouter = require("./api/dni-identities");
const identitiesRouter = require("./api/identities");
const subjectsRouter = require("./api/subjects");
const activitiesRouter = require("./api/activities");
const usersRouter = require("./api/users");
//const filesRouter = require("./api/file");


const authorized = require("../middleware/authorized");
const onlyRole = require("../middleware/onlyRole");

module.exports = app => {

  app.use("/", infoRouter)
  app.use("/auth", authRouter);
  app.use("/users", onlyRole("ADMIN"),usersRouter);
  
  app.use("/subjects", authorized, subjectsRouter);
  app.use("/activities", authorized, activitiesRouter);
  app.use("/api/v1/dni-identity", dniIdentitiesRouter);
  app.use("/api/v1/identity", identitiesRouter);
  app.use("/identityValidationRequests", identitiesRouter); 
  
  //app.use("/api/file", filesRouter);
  

}