const { validationStatus } = require("../models/IdentityValidationRequest");
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
    return this.model.find(findExpr).sort({ lastname: 1 })
  }

  async findByDni(dni) {
    return this.model.findOne({ dni });
  }
  async findByDid(did) {
    return this.model.find({ did });
  }

  async accept(id, data) { //Data puede contener un nuevo dni aunque por ahora no lo puede corregir
    const identityValidationRequest = await this.model.findById(id);
    if (identityValidationRequest.status !== validationStatus.IN_PROGRESS) {
      console.log("Devolver alguna exception xq no es valido el estado par hacer el cambio")
    } else {
      identityValidationRequest.status = validationStatus.ACCEPTED;
      await identityValidationRequest.save();
    }
    return identityValidationRequest;
  }

  async reject(id, data) { //Data puede contener la causa por la que se rechazo la validacion
    console.log(data);
    const identityValidationRequest = await this.model.findById(id);
    if (identityValidationRequest.status !== validationStatus.IN_PROGRESS) {
      console.log("Devolver alguna exception porque no es valido el estado par hacer el cambio")
    } else {
      identityValidationRequest.status = validationStatus.REJECTED;
      identityValidationRequest.rejectionCause = data.rejectReason;
      identityValidationRequest.rejectionObservation =  data.rejectionObservations;
      await identityValidationRequest.save();
    }
    return identityValidationRequest;

  }


  async revert(id, data) {
    const identityValidationRequest = await this.model.findById(id);
    identityValidationRequest.status = validationStatus.IN_PROGRESS;
    identityValidationRequest.rejectionCause = undefined;
    identityValidationRequest.rejectionObservation = undefined;
    await identityValidationRequest.save();
    return identityValidationRequest;

  }

}
module.exports = IdentityValidationService;