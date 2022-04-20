class ActivityService {
  constructor() {
  }


  log(severity, message) {
    switch (severity) {
      case "info": {
        return this.info(message)
      }
      case "warn": {
        return this.warn(message)
      }
      case "error": {
        return this.error(message)
      }
    }
  }
  info(message) {
    console.log(`[${new Date().toISOString()}] [info] ${message}`);
    //TODO: Store on file, redis or mongo as timeseries

  }
  warn(message) {
    console.log(`[${new Date().toISOString()}] [warn] ${message}`);
    //TODO: Store on file, redis or mongo as timeseries

  }
  error(message) {
    console.log(`[${new Date().toISOString()}] [error] ${message}`);
    //TODO: Store on file, redis or mongo as timeseries

  }


}
module.exports = ActivityService;
