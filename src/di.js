//Dependency injections
const Credential = require("./models/Credential");
const PreCredential = require("./models/PreCredential");
const Subject = require("./models/Subject");
const User = require("./models/User");
const Template = require("./models/Template");


const AuthService = require("./services/AuthService");
const CredentialsService = require("./services/CredentialsService");
const PreCredentialsService = require("./services/PreCredentialsService");
const SubjectService = require("./services/SubjectService");
const TemplatesService = require("./services/TemplatesService");
const ActivityService = require("./services/ActivityService");

const AuthController = require("./controllers/AuthController");
const CredentialsController = require("./controllers/CredentialsController");
const TemplatesController = require("./controllers/TemplatesController");
const SubjectsController = require("./controllers/SubjectsController");

const activityService = new ActivityService();
//pass acitivty service as activityService param

const authService = new AuthService(User, activityService);
const credentialsService = new CredentialsService(Credential, activityService);
const preCredentialsService = new PreCredentialsService(PreCredential, activityService);
const subjectService = new SubjectService(Subject, activityService);
const templatesService = new TemplatesService(Template, activityService);

const authController = new AuthController(authService);
const credentialsController = new CredentialsController(credentialsService);
const templatesController = new TemplatesController(templatesService);
const subjectsController = new SubjectsController(subjectService);

module.exports = {
  authService,
  credentialsService,
  preCredentialsService,
  subjectService,
  templatesService,
  authController,
  credentialsController,
  templatesController,
  subjectsController, 
};

