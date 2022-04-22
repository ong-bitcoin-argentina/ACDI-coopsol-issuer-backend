const express = require("express");
const router = express.Router();
const { credentialsController: controller } = require("../../di");

router.post("", (req, res, next) => controller.create(req,res,next));
router.get("", (req, res, next) => controller.find(req,res,next));
router.patch("/revoke/{id}/reason/{reason}", (req, res, next) => controller.revokeCredential(req,res,next));
router.get("/types", (req, res, next) => controller.getTypes(req,res,next));
router.get("/states", (req, res, next) => controller.getStates(req,res,next));
router.get("/revokation-reasons", (req, res, next) => controller.getRevocationReasons(req,res,next));
router.get("/revocation-reasons", (req, res, next) => controller.getRevocationReasons(req,res,next));

module.exports = router;
