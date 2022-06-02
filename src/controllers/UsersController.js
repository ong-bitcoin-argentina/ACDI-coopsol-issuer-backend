const Controller = require("./Controller");

class UsersController extends Controller {

  async create(req,res,next){
    try {
      const data = req.body;
      data.createdBy = req.extra.user.id;
      const result = await this.service.create(data);
      res.json({ data: result })
    } catch (err) {
      next(err);
    }
  }

}
module.exports = UsersController;