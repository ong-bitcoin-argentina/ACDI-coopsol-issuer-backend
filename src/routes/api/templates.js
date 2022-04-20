const express = require("express");
const { templatesController } = require("../../di");
const router = express.Router();

router.get("",(req,res,next) => templatesController.find(req,res,next));
router.get("/:id",(req,res,next) => templatesController.get(req,res,next));
router.post("",(req,res,next) => templatesController.create(req,res,next));
router.patch("/:id",(req,res,next) => templatesController.update(req,res,next));
router.delete("/:id",(req,res,next) => templatesController.delete(req,res,next));


module.exports = router;