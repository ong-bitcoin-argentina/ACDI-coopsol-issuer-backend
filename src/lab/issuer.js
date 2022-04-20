(async function () {
  const issuer = new DidiIssuerSdk();
  //  const certs = await issuer.certs().find();
  //  console.log(certs);

  //const cert = await issuer.certs().get("62473e3ff899d6d4e1e68900");
  //console.log(cert)
/*   const templateId = "62262ce12248912bdc580a36";


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
          "value": "did:ethr:0x7f3d1b4d87e5f3835be3e356ffdfddd66ccf6824"
        }
      ]
    ],
    "others": []
  };


  const cert = await issuer.certs().create(data, templateId);
  console.log(cert)
 */


  const credentialId = "626042e2451001b33f6bcf70";
  const cert = await issuer.certs().emit(credentialId);
  console.log(cert) 

/*   const newP = await issuer.participants().create({

  })
  console.log(newP) */


})();
