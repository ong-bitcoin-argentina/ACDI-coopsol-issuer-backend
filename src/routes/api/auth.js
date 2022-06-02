const express = require("express");
const router = express.Router();
const { authController } = require("../../di");


router.post("/login", (req, res, next) => authController.login(req,res,next));
router.post("/signup", (req, res, next) => authController.signup(req,res,next));

router.get("/logout", (req, res, next) => authController.logout(req,res,next));

module.exports = router;