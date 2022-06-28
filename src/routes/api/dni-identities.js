const express = require("express");

const router = express.Router();
const { dniIdentitiesController } = require("../../di");

router.post("/", (req,res,next) => dniIdentitiesController.processIdentity(req,res,next));

module.exports = router;