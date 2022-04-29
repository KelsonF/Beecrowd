import { print,input } from "../io_utils.js";

function main(){
    var dinheiro = Number(input("Digite o valor do saque: "))
    let saque = dinheiro * 100
    
    var notas100 = Math.trunc(saque/10000)
    var resto = saque % 10000
    var notas50 = Math.trunc(resto/5000)
    var resto2 = resto % 5000
    var notas20 = Math.trunc(resto2/2000)
    var resto3 = resto2 % 2000
    var notas10 = Math.trunc(resto3/1000)
    var resto4 = resto3 % 1000
    var notas5 = Math.trunc(resto4/500)
    var resto5 = resto4 % 500
    var notas2 = Math.trunc(resto5/200)
    var resto6 = resto5 % 200

    var moeda1 = Math.trunc(resto6/100)
    var resto7 = resto6 % 100
    var moeda05 = Math.trunc(resto7/50)
    var resto8 = resto7 % 50
    var moeda025 = Math.trunc(resto8/25)
    var resto9 = resto8 % 25
    var moeda010 = Math.trunc(resto9/10)
    var resto10 = resto9 % 10
    var moeda005 = Math.trunc(resto10/5)
    var resto11 = resto10 % 5
    var moeda001 = resto11

    print("NOTAS:")
    print(`${notas100} nota(s) de R$ 100.00`)
    print(`${notas50} nota(s) de R$ 50.00`)
    print(`${notas20} nota(s) de R$ 20.00`)
    print(`${notas10} nota(s) de R$ 10.00`)
    print(`${notas5} nota(s) de R$ 5.00`)
    print(`${notas2} nota(s) de R$ 2.00`)
    print("MOEDAS:")
    print(`${moeda1} moeda(s) de R$ 1.00`)
    print(`${moeda05} moeda(s) de R$ 0.50`)
    print(`${moeda025} moeda(s) de R$ 0.25`)
    print(`${moeda010} moeda(s) de R$ 0.10`)
    print(`${moeda005} moeda(s) de R$ 0.05`)
    print(`${moeda001} moeda(s) de R$ 0.01`)
}
main()  