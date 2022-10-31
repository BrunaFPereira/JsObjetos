const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "02983747565",
    fones: ["12345678954", "13098345678"]
}

    cliente.dependentes = [{
        nome: "Sarah",
        parentesco: "irmã",
        dataNasc: "17/09/1995"
    }]

cliente.dependentes.push({
    nome: "Samia",
    parentesco: "filha",
    dataNasc: "28/03/2017"
})

console.log(cliente)

const filhasMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "28/03/2017")

console.log(filhasMaisNova)
console.log(filhasMaisNova[0].nome)