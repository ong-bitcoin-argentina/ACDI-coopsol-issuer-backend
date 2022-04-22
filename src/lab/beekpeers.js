const {subjectService }= require("../di") ;

const beekeepers = [
  {
    firstname: "Sergio Daniel",
    lastname: "Ardiles",
    dni: 37955419
  },
  {
    firstname: "Angel",
    lastname: "Argañaraz",
    dni: 30209214,
    cuit: "20302092142"
  },
  {
    firstname: "Angel Alejandro",
    lastname: "Arguello",
    dni: 24840402,
    cuit: "20248404028"
  },
  {
    firstname: "Carlos Daniel",
    lastname: "Arguello",
    dni: 22617916,
    cuit: "20226179160"
  },
  {
    firstname: "Oscar Gustavo",
    lastname: "Arias",
    dni: 23550205,
    cuit: "20235502055"
  },
  {
    firstname: "Felipe Alejandro",
    lastname: "Armas",
    dni: 12837573,
    cuit: "20128375733"
  },
  {
    firstname: "OSCAR",
    lastname: "ASTORGA",
    cuit: 00000000002
  },
  {
    firstname: "Rene",
    lastname: "Avila",
    dni: 100000
  },
  {
    firstname: "Federico Hernan",
    lastname: "Ayuch",
    dni: 20959026,
    cuit: "20959026"
  },
  {
    firstname: "NILO OSVALDO",
    lastname: "BAIOCCHI",
    dni: 7624033,
    cuit: "20076240338"
  },
  {
    firstname: "Juan Carlos",
    lastname: "Barraza",
    dni: 40170439,
    cuit: "20401704397"
  },
  {
    firstname: "Juan Carlos",
    lastname: "Barraza",
    dni: 55551111111,
    cuit: "55551111111"
  },
  {
    firstname: "Sergio",
    lastname: "Barraza",
    dni: 100000
  },
  {
    firstname: "Lorena",
    lastname: "Barrera",
    dni: 29837151
  },
  {
    firstname: "Carlos Daniel",
    lastname: "Basualdo",
    dni: 22861689,
    cuit: "22861689___"
  },
  {
    firstname: "Nilda",
    lastname: "Basualdo",
    dni: 31000000000,
    cuit: "31000000000"
  },
  {
    firstname: "Nilda del Carmen",
    lastname: "Basualdo",
    dni: 18247253,
    cuit: "27182472536"
  },
  {
    firstname: "Franco Nery",
    lastname: "Battan",
    dni: 26053807,
    cuit: "20260538072"
  },
  {
    firstname: "JUAN CARLOS",
    lastname: "BAZZARA",
    dni: 40170439,
    cuit: "40170439"
  },
  {
    firstname: "Delfor Armando",
    lastname: "Beltran",
    dni: 14754051,
    cuit: "20147540516"
  },
  {
    firstname: "Roberto Osbaldo Del",
    lastname: "Besso",
    dni: 17464872,
    cuit: "20174648728"
  },
  {
    firstname: "Diego Javier",
    lastname: "Blasi",
    dni: 24465423,
    cuit: "20244654232"
  },
  {
    firstname: "Oscar Ramon",
    lastname: "Boboli",
    dni: 31579951,
    cuit: "20315799512"
  },
  {
    firstname: "Victor Andres",
    lastname: "Bordallo",
    dni: 24340945,
    cuit: "20243409455"
  },
  {
    firstname: "Juan",
    lastname: "Bordoy",
    dni: 6443721,
    cuit: "06443721"
  },
  {
    firstname: "Elena",
    lastname: "Gomez",
    dni: 66699999,
    cuit: "66699999"
  },
  {
    firstname: "LILIANA",
    lastname: "GOMEZ",
    dni: 1313131,
    cuit: "1313131"
  },
  {
    firstname: "Noemi",
    lastname: "Gomez",
    dni: 100000000,
    cuit: "100000000"
  },
  {
    firstname: "Romina",
    lastname: "Gomez",
    dni: 22225555,
    cuit: "22225555"
  },
  {
    firstname: "Sergio Nicolas",
    lastname: "Gomez",
    dni: 35744283,
    cuit: "20357442835"
  },
  {
    firstname: " Jose",
    lastname: "Gomez,",
    dni: 22123456,
    cuit: "22123456"
  },
  {
    firstname: "Antonio Toribio",
    lastname: "Gonzalez",
    dni: 22413118,
    cuit: "20224131187"
  },
  {
    firstname: "Elias Emanuel",
    lastname: "Gonzalez",
    dni: 36564448,
    cuit: "23365644489"
  },
  {
    firstname: "Jose",
    lastname: "Gonzalez",
    dni: 22418932,
    cuit: "20229175140"
  },
  {
    firstname: "Leonel Leobardo",
    lastname: "Gonzalez",
    dni: 38123019,
    cuit: "20381230199"
  },
  {
    firstname: "Manuel Arnaldo",
    lastname: "Gonzalez",
    dni: 31506764
  },
  {
    firstname: "Normando Cirilo",
    lastname: "Gonzalez",
    dni: 24667965,
    cuit: "20246679658"
  },
  {
    firstname: "Oscar Roque",
    lastname: "Gonzalez",
    dni: 22917514,
    cuit: "23229175149"
  },
  {
    firstname: "Pablo",
    lastname: "Gonzalez",
    dni: 23444126,
    cuit: "20234441265"
  },
  {
    firstname: "Zulma Emilda",
    lastname: "Gonzalez",
    dni: 20170688,
    cuit: "27201706888"
  },
  {
    firstname: "Moises Nicolas",
    lastname: "Gramajo",
    dni: 16339954,
    cuit: "20163399548"
  },
  {
    firstname: "Ramon Felix",
    lastname: "Gramajo",
    dni: 18376951,
    cuit: "20183769511"
  },
  {
    firstname: "Jose Luis",
    lastname: "Gutierrez",
    dni: 26655016,
    cuit: "20266550163"
  },
  {
    firstname: "Walter Rene",
    lastname: "Gutierrez",
    dni: 25986655,
    cuit: "25986655"
  },
  {
    firstname: "Juan Alberto",
    lastname: "Hab",
    dni: 16725869,
    cuit: "20167258698"
  },
  {
    firstname: "Mario Ramon",
    lastname: "Herrador",
    dni: 16720881,
    cuit: "23167208819"
  },
  {
    firstname: "Enrique Humberto",
    lastname: "Herrera",
    dni: 16467872,
    cuit: "20164678724"
  },
  {
    firstname: "Carlos Tomas",
    lastname: "Coronel",
    dni: 33209944,
    cuit: "33209944"
  },
  {
    firstname: "Cristian Damian",
    lastname: "Coronel",
    dni: 33693802,
    cuit: "20336938024", 
    email: "coronel28cristian@gmail.com"
  },
  {
    firstname: "Guillermo",
    lastname: "Coronel",
    dni: 33333555888,
    cuit: "33333555888"
  },
  {
    firstname: "Luis Antonio",
    lastname: "Coronel",
    dni: 27662673,
    cuit: "27662673"
  },
  {
    firstname: "Omar Alberto",
    lastname: "Coronel",
    dni: 30178590,
    cuit: "23301785909"
  },
  {
    firstname: "Rey",
    lastname: "Corvalan",
    dni: 26449692
  },
  {
    firstname: "Rosa",
    lastname: "Coronel",
    dni: 55444444444,
    cuit: "55444444444"
  },
  {
    firstname: "Walter Marcelo",
    lastname: "Coronel",
    dni: 23051179,
    cuit: "23230511799"
  },
  {
    firstname: "Ariel",
    lastname: "Corvalan",
    dni: 26449692,
    cuit: "26449692"
  },
  {
    firstname: "Julian",
    lastname: "Costa",
    dni: 27638064,
    cuit: "20276380649,"
  },
  {
    firstname: "Jorge Omar",
    lastname: "Costamagna",
    dni: 18294417,
    cuit: "20182941744"
  },
  {
    firstname: "Damian Benito",
    lastname: "Croattini",
    dni: 23729563,
    cuit: "20237295634"
  },
  {
    firstname: "Alfio Porfirio",
    lastname: "Cuellar",
    dni: 20166527,
    cuit: "20201665273"
  },
  {
    firstname: "Faustino",
    lastname: "Cuellar",
    dni: 7528384,
    cuit: "23075283849"
  },
  {
    firstname: "Naldo Leopoldo",
    lastname: "Cuellar",
    dni: 21346415,
    cuit: "23213464159"
  },
  {
    firstname: "Mario Gustavo",
    lastname: "Cule",
    dni: 23031059,
    cuit: "23230310599"
  },
  {
    firstname: "Gallar Irene",
    lastname: "De La Silva",
    dni: 24277405,
    cuit: "24277405"
  },
  {
    firstname: "Horacio",
    lastname: "Debard",
    dni: 11258379,
    cuit: "20112583794"
  },
  {
    firstname: "ALEJANDRA",
    lastname: "DELGADO",
    dni: 1515155,
    cuit: "1515155"
  },
  {
    firstname: "Maria Florencia",
    lastname: "Di Santo",
    dni: 34183329,
    cuit: "34183329"
  },
  {
    firstname: "ALTOMERCATO",
    lastname: "CTM",
    cuit: "55000004129"
  }
];

const beekeepers2 = [
  {
    firstname: "Agricultores Federados Argentinos",
    cuit:30525718626
  },
  {
    firstname:"Almacen San Cayetano",
    dni: 12300000 		
  },
  {
    lastname: "Abrahm",
    firstname:" Lucas",
    dni: 37119605 		
  },
  {
    lastname: "Almaraz",
    firstname:" Esteban ",
    dni: 34926972 		
  },
  {
    lastname: "Andreis",
    firstname:" Daniel Hugo",
    cuit: "20222488851",
    dni: 22248885 		
  },
  {
    lastname: "Anrique",
    firstname:" Teofilo",
    cuit:"20234441273",
    dni: 23444127 		
  },
  {
    lastname: "Antonio",
    firstname:" Javier Castillo Gutierres",
    dni: 7236922
  },
  {
    lastname: "Aranda",
    firstname:" Raul Viterman",
    cuit: "20166997845",
    dni: 16699784 		
  },
  {
    lastname: "Aranda",
    firstname:" Alejandro A",
    dni: 40032440 		
  },
  {
    lastname: "Aranda",
    firstname:" Angel Antonio",
    dni: 100000 		
  },
  {
    lastname: "Aranda",
    firstname:" Cristian Gabriel",
    cuit:"23259866359",
    dni: 25986635 		
  },
  {
    lastname: "Aranda",
    firstname:" Cristian Mauro",
    cuit:"20307152313",
    dni: 30715231 		
  },
  {
    lastname: "Aranda",
    firstname:" Jose Domingo",
    cuit:"20071872476",
    dni: 7187247 		
  },
  {
    lastname: "Aranda",
    firstname:" Jose Luis",
    cuit:"20245971932",
    dni: 24597193 		
  },
  {
    lastname: "Aranda",
    firstname:" Karina Edith",
    cuit:"27410167234",
    dni: 41016723 		
  },
  {
    lastname: "Aranda",
    firstname:" Omar Roberto",
    cuit:"20166501602",
    dni: 16650160 		
  },
  {
    lastname: "Aranda",
    firstname:" Victor Fabian",
    dni: 22164401 		
  },
  {
    lastname: "Araoz",
    firstname:" Juan Ignacio",
    cuit:"23254510599",
    dni: 25451059 		
  },
  {
    lastname: "Ardiles",
    firstname:" Anacleto",
    cuit:"20075136901",
    dni: 7513690 		
  },
  {
    lastname: "Ardiles",
    firstname:" Rafael",
    dni: 28704010 	
  },
]




async function loadBeekepers() {
  console.log(`LOad beekepers`)
  for(const beekeper of beekeepers2){
    console.log(beekeper)
    try{
    await subjectService.create({
      ...beekeper
    })
  } catch(err){
    console.log(`Error creando:`, beekeepers.firstname)
  }
  }
}

module.exports = {
  loadBeekepers

}