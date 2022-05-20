const express = require("express");
const router = express.Router();
const { activitiesController } = require("../../di");

router.get("/", (req, res, next) => activitiesController.find(req, res, next));
router.post("/", (req, res, next) => activitiesController.create(req, res, next));



module.exports = router;