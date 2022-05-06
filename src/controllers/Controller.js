
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
      const { sort: sortTerm } = req.query;

      const sort ={};
      if(sortTerm){
        if(sortTerm.startsWith("-")){
          let sortField =  sortTerm.substring(1);
          sort[sortField] = -1;
        } else {
          sort[sortTerm] = 1; 
        }
      }

      const result = await this.service.find(filter, sort);
      res.json({data: result})
    } catch (err) {
      next(err);
    }
  }
  
} 

module.exports = Controller;