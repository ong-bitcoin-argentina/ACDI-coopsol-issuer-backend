const Controller = require("./Controller");
const jwt = require("jsonwebtoken");
const boom = require("@hapi/boom");
const JWT_SECRET = process.env.JWT_SECRET;

class IdentitiesController extends Controller {
  constructor(service) {
    super(service);
    this.subjectsService = service;
  }

  async processIdentity(req, res, next){
    try{
      const { credential } = req.body;
      const decoded = jwt.decode(credential);
      //TODO: Implementar decode con public key jwt.decode(credential, publickKey)
      const did = decoded.sub;
      const datosPersonales = decoded?.vc?.credentialSubject?.["Datos Personales"]?.data;

      if(!did || !datosPersonales){
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

      if(!found){
        subject = await this.subjectsService.create(data);
      } else {
        subject = await this.subjectsService.update(found._id, data);
      }

      //Emitir evento al front para indicarle que se recibieron las credenciales de firstname, lastname 

      res.json(subject);

    } catch(err){
      //Comprobar errores de jwt
      next(err);
    }
  }

}
module.exports = IdentitiesController;