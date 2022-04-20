const express = require("express");
const router = express.Router();

const AuthController = require("../../controllers/AuthController");
const authController = new AuthController();

router.post("/login", (req, res, next) => authController.login(req,res,next));
router.get("/logout", (req, res, next) => authController.logout(req,res,next));

module.exports = router;