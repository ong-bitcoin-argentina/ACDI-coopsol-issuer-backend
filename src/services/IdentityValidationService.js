const Service = require("./Service");

class IdentityValidationService extends Service {

  async search(term) {
    /* TODO: Al usar regex no usa indices, buscar mejores formas de realizar esto si fuera necesario */
    const findExpr = {
      $or: [
        { "firstname": { $regex: term, '$options': 'i' } },
        { "lastname": { $regex: term, '$options': 'i' } },
        { "dni": { $regex: term, '$options': 'i' } },
      ]
    };
    return this.model.find(findExpr).sort({lastname: 1})
  }

  async findByDni(dni) {
    return this.model.findOne({ dni });
  }
  async findByDid(did) {
    return this.model.find({ did });
  }

  async delete() {

  }


}
module.exports = IdentityValidationService;