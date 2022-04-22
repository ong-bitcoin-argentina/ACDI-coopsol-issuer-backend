const Service = require("./Service");

class CredentialsService extends Service {
  

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