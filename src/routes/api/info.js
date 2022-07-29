const fs = require("fs");
const express = require("express");
const router = express.Router();

const packageJSON = require("../../../package.json");

router.get("/", async (req,res,next) => {
    res.json({
      status: "success",
      data: {
        name: "Coopsol backend", //TODO: read from package.json
        version: packageJSON.version
      }
    })
  });
  
module.exports = router;