const DidiIssuerSdk = require("../libs/DidiIssuerSdk");



(async function () {
  const issuer = new DidiIssuerSdk();

  //const certs = await issuer.certs().find();
  //console.log(certs);

  //const cert = await issuer.certs().get("62473e3ff899d6d4e1e68900");
  //console.log(cert)
  const PERSONAL_DATA_TEMPLATE = "62262ce12248912bdc580a36";


  const data = {
    "cert": [
      {
        "name": "Credencial",
        "value": "Datos Personales"
      },
      {
        "name": "Nombre(s)",
        "value": "Cosme"
      },
      {
        "name": "Apellido(s)",
        "value": "Fulanito"
      },
      {
        "name": "Nacionalidad",
        "value": "Argentino"
      },
      {
        "name": "Numero de Identidad",
        "value": " 31127949"
      }
    ],
    "participant": [
      [
        {
          "name": "DID",
          "value": "did:ethr:0xd90245cca4e5efbbeb2c2f8e9f57c666fecfc2e7"
        }
      ]
    ],
    "others": []
  }; 


  const result = await issuer.certs().create(data, PERSONAL_DATA_TEMPLATE);
  console.log(result[0]._id)

  
  const emmitedCert = await issuer.certs().emit(result[0]._id);
  console.log(emmitedCert);

  /* 
  const credentialId = "62703b28451001b33f6c79ca";
  const emmited = await issuer.certs().emit(credentialId);
  console.log(emmited)  */
  console.log(`Done~!`)
   
/*   const newP = await issuer.participants().create({

  })
  console.log(newP) */


})();
