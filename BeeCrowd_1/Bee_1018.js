import { print,input } from "../io_utils.js";

function main(){
    var saque = Number(input("Digite um valor de saque: "))
    
    var notas100 = Math.trunc(saque/100)
    var resto = saque % 100
    var notas50 = Math.trunc(resto/50)
    var resto2 = resto % 50
    var notas20 = Math.trunc(resto2/20)
    var resto3 = resto2 % 20
    var notas10 = Math.trunc(resto3/10)
    var resto4 = resto3 % 10
    var notas5 = Math.trunc(resto4/5)
    var resto5 = resto4 % 5
    var notas2 = Math.trunc(resto5/2)
    var notas1 = resto5 % 2
    
    print(saque)
    print(`${notas100} nota(s) de R$ 100,00`)
    print(`${notas50} nota(s) de R$ 50,00`)
    print(`${notas20} nota(s) de R$ 20,00`)
    print(`${notas10} nota(s) de R$ 10,00`)
    print(`${notas5} nota(s) de R$ 5,00`)
    print(`${notas2} nota(s) de R$ 2,00`)
    print(`${notas1} nota(s) de R$ 1,00`)
}
main()