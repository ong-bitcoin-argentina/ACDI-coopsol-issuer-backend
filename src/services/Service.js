class Service {
  constructor(model, activityService, context, emitter) {
    this.model = model;
    this.activity = activityService;
    this.context = context;
    this.emitter = emitter;
  }

  async create(data) { 
    const instance = new this.model(data);
    await instance.save();
    return instance;
  }

  async findById(id) {
    return this.model.findById(id);
  }

  async update(id, data) {
    return this.model.findByIdAndUpdate(id, {$set: {...data}}, {returnOriginal: false});
  }
  
  async find(filter = {}, sort) {
    return this.model.find(filter).sort(sort);
  }


  async delete(id){
    const deleted = await this.model.findByIdAndDelete(id); 
    return deleted;
  }
  

  log(severity, message){
    if(!this.activity) return;
    this.activity.log(severity, message);
  }
  info(message){
    this.activity.info(message);
  }
  warn(message){
    this.activity.warn(message);
  }
  error(message){
    this.activity.error(message);
  }



}
module.exports = Service;