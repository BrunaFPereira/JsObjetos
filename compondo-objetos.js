const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "02983747565",
    fones: ["12345678954", "13098345678"]
}

cliente.dependentes = {
    nome: "Sarah",
    parentesco: "irmã",
    dataNasc: "17/09/1995"
}

console.log(cliente)

cliente.dependentes.nome ="Sarah Freitas"

console.log(cliente)