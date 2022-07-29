const Controller = require("./Controller");
const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");


const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

class IdentitiesController extends Controller {
  constructor(subjectService, identityValidationService, emitter) {
    super(subjectService);
    this.subjectsService = subjectService;
    this.identityValidationService = identityValidationService;
    this.emitter = emitter;
  }

  //La identidad de la persona no se encuentra validada, se crea una instancia de IdentityValidationRequest
  async processIdentity(req, res, next) {
    try {
      const { credential } = req.body;
      const decoded = jwt.decode(credential);
      //TODO: Implementar decode con public key jwt.decode(credential, publickKey)
      const did = decoded.sub;
      const datosPersonales = decoded?.vc?.credentialSubject?.["Datos Personales"]?.data;

      if (!did || !datosPersonales) {
        return next(boom.badData("Faltan datos para procesar la solicitud"));
      }

      const {
        'Nombre(s)': firstname,
        'Apellido(s)': lastname,
        'Nacionalidad': nationality,
        'Numero de Identidad': id,
        'Correo': email,
        "Numero de Celular": phoneNumber
      } = datosPersonales;

      const data = {
        firstname: firstname,
        lastname,
        nationality,
        dni: id,
        did,
        email,
        phoneNumber
      };


      const identityRequest = await this.identityValidationService.create(data);

      this.emitter.emit("identity-validation-request", {
        _id: identityRequest._id,
        firstname,
        lastname,
        nationality,
        did,
        dni: id,
        email,
        phoneNumber,
        createdAt: identityRequest.createdAt
      });

      res.json(identityRequest);

    } catch (err) {
      //Comprobar errores de jwt
      next(err);
    }
  }

  //Usar para aquellos casos en los que la identidad se encuentre validada x renaper/vu security
  async processValidatedIdentity(req, res, next) {
    try {
      const { credential } = req.body;
      const decoded = jwt.decode(credential);
      //TODO: Implementar decode con public key jwt.decode(credential, publickKey)
      const did = decoded.sub;
      const datosPersonales = decoded?.vc?.credentialSubject?.["Datos Personales"]?.data;

      if (!did || !datosPersonales) {
        return next(boom.badData("Faltan datos para procesar la solicitud"));
      }

      const {
        'Nombre(s)': firstname,
        'Apellido(s)': lastname,
        'Nacionalidad': nationality,
        'Numero de Identidad': id
      } = datosPersonales;

      const data = {
        firstname: firstname,
        lastname,
        nationality,
        dni: id,
        did,
      };


      let subject;
      let found = await this.subjectsService.findByDni(id);

      if (!found) {
        subject = await this.subjectsService.create(data);

      } else {
        subject = await this.subjectsService.update(found._id, data);
      }

      //Emitir evento al front para indicarle que se recibieron las credenciales de firstname, lastname 
      console.log("Emit producer-did-associated")
      this.emitter.emit("producer-did-associated", { _id: subject._id, firstname, lastname, did });

      res.json(subject);

    } catch (err) {
      //Comprobar errores de jwt
      next(err);
    }
  }

  async getIdentityValidationRequests(req, res, next) {
    try {
      const { requestState } = req.query;
      const filter = {};
      if(requestState === "IN_PROGRESS"){
        filter.status = "IN_PROGRESS";
      }
      if(requestState === "SUCCESS"){
        filter.status = "ACCEPTED";
      }
      if(requestState === "FAILURE"){
        filter.status = "REJECTED";
      }

      const validationRequest = await this.identityValidationService.find(filter);
      res.json(validationRequest)
    } catch (err) {
      next(err);
    }
  }


  async acceptIdentityValidationRequest(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body; /* Tener en cuenta que pueden haber corregido el documento */
      const validationRequest = await this.identityValidationService.accept(id, data);

      const {
        firstname,
        lastname,
        dni,
        nationality,
        phoneNumber,
        did
      } = validationRequest;
      
      const subjectData = {
        firstname,
        lastname,
        dni,
        nationality,
        phoneNumber,
        did
      }

      let subject;
      let found = await this.subjectsService.findByDni(validationRequest.dni);

      if (!found) {
        console.log(`new Producer`)
        subject = await this.subjectsService.create(subjectData); 
        this.emitter.emit("new-producer", subject );
      } else {
        console.log(`update producer `)
        subject = await this.subjectsService.update(found._id, subjectData);
        this.emitter.emit("updated-producer", subject );
      } 

      res.json(validationRequest);

    } catch (err) {
      next(err)
    }

  }

  async rejectIdentityValidationRequest(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body;
      const validationRequest = await this.identityValidationService.reject(id, data);
      res.json(validationRequest);

    } catch (err) {
      next(err)
    }

  }

  async revertIdentityValidationRequest(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body;
      const validationRequest = await this.identityValidationService.revert(id, data);
      res.json(validationRequest);

    } catch (err) {
      next(err)
    }

  }






}
module.exports = IdentitiesController;