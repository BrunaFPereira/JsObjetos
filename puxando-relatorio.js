const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "02983747565",
    fones: ["12345678954", "13098345678"],
    dependentes: [
      {
        nome: "Sarah",
        parentesco: "irmã",
        dataNasc: "17/09/1995"},
      {
        nome: "Samia",
        parentesco: "filha",
        dataNasc: "28/03/2017"
      }
    ],
    saldo: 100,
    depositar:function(valor) {
        this.saldo += valor
    }
}

let relatorio = "";
for  (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    }else{
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
    
}

console.log(relatorio)