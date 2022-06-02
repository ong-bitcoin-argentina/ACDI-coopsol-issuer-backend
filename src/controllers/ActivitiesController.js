const Controller = require("./Controller");

class ActivitiesController extends Controller {


  async create(req,res,next){
    try {
      const data = {...req.body, user: req.extra?.user?.email};
      const result = await this.service.create(data);
      res.json({ data: result })
    } catch (err) {
      next(err);
    }
  }


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