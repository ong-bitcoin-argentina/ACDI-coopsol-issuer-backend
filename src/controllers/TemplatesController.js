const Controller = require("./Controller");

class TemplatesController extends Controller {

  async find(req, res, next) {
    try {
      const result = await this.service.find({});
      res.json({
        data: result,
      })
    } catch (err) {
      next(err);
    }
  }


  async get(req, res, next) {
    try {
      res.json({ msg: "Templates Controller get" })
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      res.json({ msg: "Templates Controller create" })
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      res.json({ msg: "Templates Controller update" })
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      res.json({ msg: "Templates Controller delete" })
    } catch (err) {
      next(err);
    }
  }
}
module.exports = TemplatesController;