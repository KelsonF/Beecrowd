import { print,input } from "./io_utils.js";

function main(){
    var A = Number(input("Digite um valor inteiro: "))
    var B = Number(input("Digite um valor inteiro: "))
    var C = Number(input("Digite um valor inteiro: "))
    var D = Number(input("Digite um valor inteiro: "))
    
    var DIFERENCA = (A * B - C * D)
    
    print(`DIFERENCA = ${DIFERENCA}`)
    
}
main()