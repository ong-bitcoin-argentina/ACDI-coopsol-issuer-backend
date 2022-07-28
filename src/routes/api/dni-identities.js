const express = require("express");

const router = express.Router();
const { identitiesController } = require("../../di");

router.post("/", (req,res,next) => identitiesController.processIdentity(req,res,next));

module.exports = router;