const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "02983747565",
    email: "andrezim@email.com"
}

console.log(`Meu nome é ${cliente.nome}, eu tenho ${cliente.idade}, eu meu CPF é ${cliente.cpf}`)
console.log(`O diretorio do meu email é ${cliente.email.substring(9,14)}`)