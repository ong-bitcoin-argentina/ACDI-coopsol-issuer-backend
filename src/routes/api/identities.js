const express = require("express");
const router = express.Router();
const IdentitiesController = require("../../controllers/IdentitiesController");
const identitiesController = new IdentitiesController();

router.get("/", (req, res, next) => identitiesController.find(req, res, next));
router.patch("/:id", (req, res, next) => identitiesController.approveOrReject(req, res, next));



module.exports = router;