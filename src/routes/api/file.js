const express = require("express");
const router = express.Router();
const FileController = require("../../controllers/FileController");
const fileController = new FileController();


router.post("/upload", (req,res,next) => fileController.upload(req,res,next));
router.get("/download", (req,res,next) => fileController.download(req,res,next));

module.exports = router;