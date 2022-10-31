const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "02983747565",
    email: "andrezim@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]
console.log(cliente[chaves[0]]) 

chaves.forEach(info=>console.log(cliente[info]))    
console.log(cliente["nome"])