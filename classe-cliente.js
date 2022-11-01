class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositor(valor) {
        this.saldo +=valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}



const andre = new Cliente ("Andre", "andre@email.com", "2873094950934", 100)

andre.exibirSaldo()

console.log(andre)


