
// create templates
(async function () {
  try {
    /*     const template = await templatesService.create({
          name: "Identitaria",
          fields: [{
            name: "Nombre",
            dataType: "String",
          }, {
            name: "Geo",
            dataType: "String",
          }, {
            name: "Organico",
            dataType: "Boolean",
          }, {
            name: "Fecha de inicio de actividades",
            dataType: "Date",
          }
          ]
        }) */
/*         const template = await templatesService.create({
          name: "Socioeconómica",
          fields: [{
            name: "Actividad Principal",
            dataType: "String",
          }, {
            name: "Ingresos grupo familiar",
            dataType: "Number",
          }, {
            name: "Egresos grupo familiar",
            dataType: "Number",
          },{
            name: "Ingresos extra",
            dataType: "Boolean",
          },
          ]
        }) 
     */

    /*     const template = await templatesService.create({
          name: "Financiera",
          fields: [{
            name: "Scoring Historial Crediticio",
            dataType: "Number",
          },
          {
            name: "Historial de creditos",
            dataType: "Boolean",
            description: "¿Cuenta con historial de créditos con COOPSOL?"
          },
          {
            name: "Crecimiento productivo",
            dataType: "Boolean",
            description: "¿Cuenta con colmenas activas y registra un crecimiento productivo?"
          },
          {
            name: "Socio de APONA",
            dataType: "Boolean",
            description: "¿Es socio de APONA?"
          }, {
            name: "Historial de pagos",
            dataType: "Boolean",
            description: "¿Tiene historial de buen pagador/paga a término?"
          },
          {
            name: "Destino del credito",
            dataType: "Boolean",
            description: "¿el crédito es para aumentar su producción/hacer crecer su negocio?"
          },
          ]
        })
     */

/*     const template = await templatesService.create({
      name: "Productiva",
      fields: [
        {
          name: "Cantidad de colmenas",
          dataType: "Number",
        },
        {
          name: "Productor orgánico",
          dataType: "Boolean",
        }, {
          name: "Fecha de inicio de actividades",
          dataType: "Date",
        },
        {
          name: "Otras actividades",
          dataType: "String",
          description: "¿el crédito es para aumentar su producción/hacer crecer su negocio?"
        },
      ]
    }) */

    console.log(`template created`)
  } catch (err) {
    console.log(err);
  }


})()





