const Controller = require("./Controller");

const identities= [
  /* Pending identities */
]

class IdentitiesController extends Controller {
  constructor(service) {
    super(service);

  }


  async find(req, res, next) {
    try {
      res.json({
        msg: "IdentitiesController approve or reject",
        data: identities
      })
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      res.json({
        msg: "IdentitiesController approve or reject",
        data: identities
      })
    } catch (err) {
      next(err);
    }
  }

  async approveOrReject(req, res, next) {
    try {
      res.json({ msg: "IdentitiesController approve or reject" })
    } catch (err) {
      next(err);
    }
  }

}
module.exports = IdentitiesController;