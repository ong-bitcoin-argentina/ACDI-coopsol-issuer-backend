const Controller = require("./Controller");

class CredentialsController extends Controller {

  async findCredentials(req, res, next) {
    try {
      res.json({msg: "Credentials Controller findCredentials"})
    } catch (err) {
      next(err);
    }
  }
  async revokeCredential(req, res, next) {
    try {
      res.json({msg: "Credentials Controller revokeCredential"})
    } catch (err) {
      next(err);
    }
  }
  async getTypes(req, res, next) {
    try {
      res.json({msg: "Credentials Controller getTypes"})
    } catch (err) {
      next(err);
    }
  }
  async getStates(req, res, next) {
    try {
      res.json({msg: "Credentials Controller getStates"})
    } catch (err) {
      next(err);
    }
  }
  async getRevocationReasons(req, res, next) {
    try {
      res.json({msg: "Credentials Controller getRevocationReasons"})
    } catch (err) {
      next(err);
    }
  }

}
module.exports = CredentialsController;