const authRouter = require("./api/auth");
const credentialsRouter = require("./api/credentials");
const actionsRouter = require("./api/actions");
const filesRouter = require("./api/file");
const templatesRouter = require("./api/templates");
const identitiesRouter = require("./api/identities");
const subjectsRouter = require("./api/subjects");
const activitiesRouter = require("./api/activities");
const usersRouter = require("./api/users");
const authorized = require("../middleware/authorized");
const onlyRole = require("../middleware/onlyRole");

module.exports = app => {
  app.use("/credentials", credentialsRouter);
  
  app.use("/auth", authRouter);
  app.use("/users", onlyRole("ADMIN"),usersRouter);
  
  app.use("/subjects", authorized, subjectsRouter);
  app.use("/activities", authorized, activitiesRouter);
  
  //app.use("/api/file", filesRouter);
  //app.use("/identities", identitiesRouter);
  //app.use("/action", actionsRouter);
  //app.use("/templates", templatesRouter);
  //app.use("/identityValidationRequests", identitiesRouter); 

}