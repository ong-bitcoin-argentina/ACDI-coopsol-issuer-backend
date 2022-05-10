class Service {
  constructor(model, activityService) {
    this.model = model;
    this.activity = activityService;
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
    console.log(`Service Update`,data);
    return this.model.findByIdAndUpdate(id, {$set: {...data}}, {returnOriginal: false});
  }
  
  async find(filter = {}, sort) {
    return this.model.find(filter).sort(sort);
  }

  log(severity, message){
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