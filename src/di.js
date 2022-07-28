
const { EventEmitter } = require("events");

//Dependency injections
const Credential = require("./models/Credential");
const PreCredential = require("./models/PreCredential");
const Subject = require("./models/Subject");
const User = require("./models/User");
const Template = require("./models/Template");
const Activity = require("./models/Activity");
const IdentityValidationRequest = require("./models/IdentityValidationRequest");


const AuthService = require("./services/AuthService");
const CredentialsService = require("./services/CredentialsService");
const PreCredentialsService = require("./services/PreCredentialsService");
const SubjectService = require("./services/SubjectService");
const IdentityValidationService = require("./services/IdentityValidationService");
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
const identityValidationService = new IdentityValidationService(IdentityValidationRequest, activityService, {}, emitter);
const subjectService = new SubjectService(Subject, activityService, {
  identityValidationService: identityValidationService,
}, emitter);
const templatesService = new TemplatesService(Template, activityService, {}, emitter);

const authController = new AuthController(authService);
const credentialsController = new CredentialsController(credentialsService);
const templatesController = new TemplatesController(templatesService);
const subjectsController = new SubjectsController(subjectService);
const activitiesController = new ActivitiesController(activityService);
const identitiesController = new IdentitiesController(subjectService, identityValidationService, emitter);

const usersService = new UsersService(User, activityService, {
  authService: authService
}, emitter);

const usersController = new UsersController(usersService);



module.exports = {
  authService,
  credentialsService, //Este creo que se puede deprecar
  preCredentialsService, //Este creo que se puede deprecar
  subjectService,
  templatesService, //Este creo que se puede deprecar - Esto se maneja contra el backend del issuer, pero podemos mantener una copia
  identityValidationService,
  authController,
  credentialsController,
  templatesController,
  subjectsController,
  activitiesController,
  identitiesController,
  usersController,
  emitter
};


