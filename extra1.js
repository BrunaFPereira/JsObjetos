const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   delete objPersonagem.aliado
   delete objPersonagem["status"]

  //  console.log(objPersonagem.aliado)
  //  console.log(objPersonagem.status)
  console.log(objPersonagem)

  const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) 
console.log(delPropInexistente) 
