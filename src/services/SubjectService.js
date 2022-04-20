const Service = require("./Service");

class SubjectService extends Service {

  async findByDni(dni) {
    return this.model.find({ dni });
  }
  async findByDid(did) {
    return this.model.find({ did });
  }

  async update() {

  }
  async delete() {

  }


}
module.exports = SubjectService;