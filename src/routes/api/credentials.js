const express = require("express");
const router = express.Router();

const CredentialsController = require("../../controllers/CredentialsController");
const credentialsController = new CredentialsController();


router.get("", (req, res, next) => credentialsController.findCredentials(req,res,next));
router.patch("/revoke/{id}/reason/{reason}", (req, res, next) => credentialsController.revokeCredential(req,res,next));
router.get("/types", (req, res, next) => credentialsController.getTypes(req,res,next));
router.get("/states", (req, res, next) => credentialsController.getStates(req,res,next));
router.get("/revokation-reasons", (req, res, next) => credentialsController.getRevocationReasons(req,res,next));
router.get("/revocation-reasons", (req, res, next) => credentialsController.getRevocationReasons(req,res,next));

module.exports = router;
