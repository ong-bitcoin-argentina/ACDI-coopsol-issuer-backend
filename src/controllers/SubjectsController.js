const Controller = require("./Controller");

class SubjectsController extends Controller {

  async find(req, res, next) {
    try {
      const filter = {}; //get filter from req
      const result = await this.service.find(filter);
      res.json({data: result})
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      const filter = {}; //TODO: Implement
      const result = await this.service.find(filter);
      res.json({data: result})
    } catch (err) {
      next(err);
    }
  }


  async search(req, res, next) {
    try {
      const term = req.query.term; 
      if(!term) {
        throw new Error("emtpy term");
      }
      const result = await this.service.search(term);
      res.json({data: result})
    } catch (err) {
      next(err);
    }
  }

  


}
module.exports = SubjectsController;