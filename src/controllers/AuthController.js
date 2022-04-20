const Controller = require("./Controller");


class AuthController extends Controller {

  async login(req, res, next) {
    try {
      const result = await this.service.login(req.body);
      return res.json(result);
    } catch (err) {
      next(err);
    }
  }
  async logout(req, res, next) {
    try {
      const result = await this.service.logout(req.body);
      return res.json(result);
    } catch (err) {
      next(err);
    }
  }

}


module.exports = AuthController;