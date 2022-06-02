const Service = require("./Service");

class UsersService extends Service {

  async create(data) { 
    const authService = this.context.authService;
    if(!authService){
      throw new Error("DI failed")
    }
    else {
      return await authService.signup(data);
    }
  }


  async delete(id){
    const user = await this.model.findById(id)
    
    if(user.roles.includes("ADMIN")){
      throw new Error("Admin users cannot be deleted")
    }

    return super.delete(id);
  }
  

}

module.exports = UsersService;
