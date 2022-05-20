const { credentialsService } = require("../di");


module.exports = async function(){
  console.log("Trying to create credentials...")

  
  await credentialsService.create({
    subject: "6260277d0287a567998f1451",
    data: {
      some: "some",
      fake: "fake",
      credential: "credential",
    },
    template: "626022deedea63168433b3d0",
  })
  console.log(`done`);
}
