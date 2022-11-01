const cliente = [
  {
    nome: "Andre",  
    cpf: "02983747565",
    dependentes: [
        {
          nome: "Sarah",
          parentesco: "irmã",
          dataNasc: "17/09/1995"},
        {
          nome: "Samia",
          parentesco: "filha",
          dataNasc: "28/03/2017"
        }],
    },  
    {
    nome: "Juliana",
    cpf: "32954979678",
    dependentes: [{
        nome: "Sofia",
        parentesco: "filha",
        dataNasc: "30/08/2020"
     }],       
    } 
]

const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes]

console.table(listaDependentes)