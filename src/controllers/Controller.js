
class Controller {
  constructor(service){
    this.service = service;
  }

  //TODO implement method for format responses
  //TODO implement format response for errors
  //Implementar versiones basicas para find, get..

  async find(req, res, next) {
    try {
      const filter = {}; //get filter from req
      const result = await this.service.find(filter);
      res.json({data: result})
    } catch (err) {
      next(err);
    }
  }
  
} 

module.exports = Controller;