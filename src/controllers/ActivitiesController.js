const Controller = require("./Controller");

class ActivitiesController extends Controller {

  async find(req, res, next) {
    try {
      const filter = {}; //TODO: Implement
      const result = await this.service.find(filter);
      res.json({data: result})
    } catch (err) {
      next(err);
    }
  }
}
module.exports = ActivitiesController;