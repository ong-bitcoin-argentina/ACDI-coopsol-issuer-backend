const Controller = require("./Controller");

class FileController extends Controller {

  async upload(req, res, next) {
    try {
      res.json({ msg: "File Controller upload" })
    } catch (err) {
      next(err);
    }
  }

  async download(req, res, next) {

    try {
      res.json({ msg: "File Controller download" })
    } catch (err) {
      next(err);
    }
  }

}
module.exports = FileController;