
class Controller {
  constructor(service) {
    this.service = service;
  }

  //TODO implement method for format responses
  //TODO implement format response for errors
  //Implementar versiones basicas para find, get..

  async create(req,res,next){
    try {
      const data = req.body;
      const result = await this.service.create(data);
      res.json({ data: result })
    } catch (err) {
      next(err);
    }
  }

  async find(req, res, next) {
    try {
      const filter = {}; //get filter from req
      const { sort: sortTerm } = req.query;

      const sort = {};
      if (sortTerm) {
        if (sortTerm.startsWith("-")) {
          let sortField = sortTerm.substring(1);
          sort[sortField] = -1;
        } else {
          sort[sortTerm] = 1;
        }
      }

      const result = await this.service.find(filter, sort);
      res.json({ data: result })
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const id = req.params.id;
      const result = await this.service.findById(id);
      res.json({data: result})
    } catch (err) {
      next(err);
    }
  }



  async update(req, res, next) {

    try {
      const id = req.params.id;
      const data = req.body;
      console.log(`Controller update`, this.service)
      const result = await this.service.update(id, data);
      res.json({ data: result })

    } catch (err) {
      next(err);
    }

  }

}

module.exports = Controller;