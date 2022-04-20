const Controller = require("./Controller");

class ActionsController extends Controller {

  async find(req, res, next){
    try{
      res.json({msg: "ActionsController find"})
    } catch(err){
      next(err);
    }
  }
  async types(req, res, next){
    try{
      res.json({msg: "ActionsController types"})
    } catch(err){
      next(err);
    }
  }
  async levels(req, res, next){
    try{
      res.json({msg: "ActionsController levels"})
    } catch(err){
      next(err);
    }
  }




}
module.exports = ActionsController;