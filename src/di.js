
const { EventEmitter } = require("events");

//Dependency injections
const Credential = require("./models/Credential");
const PreCredential = require("./models/PreCredential");
const Subject = require("./models/Subject");
const User = require("./models/User");
const Template = require("./models/Template");
const Activity = require("./models/Activity");


const AuthService = require("./services/AuthService");
const CredentialsService = require("./services/CredentialsService");
const PreCredentialsService = require("./services/PreCredentialsService");
const SubjectService = require("./services/SubjectService");
const TemplatesService = require("./services/TemplatesService");
const ActivityService = require("./services/ActivityService");
const UsersService = require("./services/UsersService");

const AuthController = require("./controllers/AuthController");
const CredentialsController = require("./controllers/CredentialsController");
const TemplatesController = require("./controllers/TemplatesController");
const SubjectsController = require("./controllers/SubjectsController");
const ActivitiesController = require("./controllers/ActivitiesController");
const UsersController = require("./controllers/UsersController");
const IdentitiesController = require("./controllers/IdentitiesController");

const emitter = new EventEmitter();

const activityService = new ActivityService(Activity);
const authService = new AuthService(User, activityService, {}, emitter);
const credentialsService = new CredentialsService(Credential, activityService, {}, emitter);
const preCredentialsService = new PreCredentialsService(PreCredential, activityService, {}, emitter);
const subjectService = new SubjectService(Subject, activityService, {}, emitter);
const templatesService = new TemplatesService(Template, activityService, {}, emitter);

const authController = new AuthController(authService);
const credentialsController = new CredentialsController(credentialsService);
const templatesController = new TemplatesController(templatesService);
const subjectsController = new SubjectsController(subjectService);
const activitiesController = new ActivitiesController(activityService);
const identitiesController = new IdentitiesController(subjectService, emitter);

const usersService = new UsersService(User, activityService, {
  authService: authService
}, emitter);

const usersController = new UsersController(usersService);



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
  activitiesController,
  identitiesController,
  usersController,
  emitter
};


