
const { EventEmitter } = require("events");

//Dependency injections
const Subject = require("./models/Subject");
const User = require("./models/User");
const Activity = require("./models/Activity");
const IdentityValidationRequest = require("./models/IdentityValidationRequest");

const AuthService = require("./services/AuthService");
const SubjectService = require("./services/SubjectService");
const IdentityValidationService = require("./services/IdentityValidationService");
const ActivityService = require("./services/ActivityService");
const UsersService = require("./services/UsersService");

const AuthController = require("./controllers/AuthController");
const SubjectsController = require("./controllers/SubjectsController");
const ActivitiesController = require("./controllers/ActivitiesController");
const UsersController = require("./controllers/UsersController");
const IdentitiesController = require("./controllers/IdentitiesController");

const emitter = new EventEmitter();

const activityService = new ActivityService(Activity);
const authService = new AuthService(User, activityService, {}, emitter);

const identityValidationService = new IdentityValidationService(IdentityValidationRequest, activityService, {}, emitter);
const subjectService = new SubjectService(Subject, activityService, {
  identityValidationService: identityValidationService,
}, emitter);

const authController = new AuthController(authService);
const subjectsController = new SubjectsController(subjectService);
const activitiesController = new ActivitiesController(activityService);
const identitiesController = new IdentitiesController(subjectService, identityValidationService, emitter);

const usersService = new UsersService(User, activityService, {
  authService: authService
}, emitter);

const usersController = new UsersController(usersService);



module.exports = {
  authService,
  subjectService,
  identityValidationService,
  authController,
  subjectsController,
  activitiesController,
  identitiesController,
  usersController,
  emitter
};


