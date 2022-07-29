const express = require("express");

const router = express.Router();
const { identitiesController } = require("../../di");

router.get("/", (req,res,next) => identitiesController.getIdentityValidationRequests(req,res,next));

router.patch("/:id/accept", (req,res,next) => identitiesController.acceptIdentityValidationRequest(req,res,next));
router.patch("/:id/reject", (req,res,next) => identitiesController.rejectIdentityValidationRequest(req,res,next));
router.patch("/:id/revert", (req,res,next) => identitiesController.revertIdentityValidationRequest(req,res,next));

router.post("/dni-did", (req,res,next) => identitiesController.processIdentity(req,res,next));

    
module.exports = router;