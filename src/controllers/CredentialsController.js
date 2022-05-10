const Controller = require("./Controller");

class CredentialsController extends Controller {
  

  async create(req, res, next) {
    try {
      console.log(req.body)
      /* Comprobar formato del body con joi, pero vamos a necesitar un subject y un template, ademas de los datos del template (en campo data)*/
      const data = {...req.body}
      /* Comprobar que data se ajuste al formato propuesto por el template */      
      const created = await this.service.create(data);

      res.json({ data: created });

    } catch (err) {
      next(err);
    }
  }

  async delete(req,res,next){
    try{
      const id = req.params.id;
      const deleted = await this.service.delete(id);
      return res.json({data: deleted});

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