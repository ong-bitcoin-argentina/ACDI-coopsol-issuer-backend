const express = require("express");
const router = express.Router();
const ActionsController = require("../../controllers/ActionsController");
const actionsController = new ActionsController();

router.get("/find", (req, res, next) => actionsController.find(req, res, next));
router.get("/types", (req, res, next) => actionsController.types(req, res, next));
router.get("/levels", (req, res, next) => actionsController.levels(req, res, next));


module.exports = router;