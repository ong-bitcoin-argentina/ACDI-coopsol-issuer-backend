const Service = require("./Service");

class CredentialsService extends Service {

  async create(data) { 
    console.log(`[Credentials service] Pre call creation`);
    super.create(data);
    console.log(`[Credentials service] Add custom logic here`);
  }

  async find(filter = {}) {
    const populate = true;
    if(populate){
      return this.model.find(filter)
      .populate("subject", "firstname lastname dni")
      .populate("template", "name");
    } else {
      return this.model.find(filter);
    }
  }


  async delete(id){
    const deleted = await this.model.findByIdAndDelete(id); /* Comprobar que el estado sea pendiente, sino va a ser necesario revocarla */
    return deleted;
  }

  async revokeCredential() {

  }
  async getTypes() {

  }
  async getStates() {

  }
  async getRevocationReasons() {

  }


}
module.exports = CredentialsService;