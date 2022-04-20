const authRouter = require("./api/auth");
const credentialsRouter = require("./api/credentials");
const actionsRouter = require("./api/actions");
const filesRouter = require("./api/file");
const templatesRouter = require("./api/templates");
const identitiesRouter = require("./api/identities");
const subjectsRouter = require("./api/subjects");

module.exports = app => {
  app.use("/auth", authRouter);
  app.use("/credentials", credentialsRouter);
  app.use("/action", actionsRouter);
  app.use("/api/file", filesRouter);

  app.use("/templates", templatesRouter);
  app.use("/identities", identitiesRouter);
  app.use("/subjects", subjectsRouter);
  app.use("/identityValidationRequests", identitiesRouter);
}