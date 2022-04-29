import { print,input } from "../io_utils.js";

function main(){
    //entrada
    var A = Number(input("Digite um valor: "))
    var B = Number(input("Digite um valor: "))
    var C = Number(input("Digite um valor: "))
    pesoA = 2
    pesoB = 3
    pesoC = 5
    //processamento
    var MEDIA = ((A*pesoA)+(B*pesoB)+(C*pesoC))/(pesoA + pesoB + pesoC)
    //saida
    print(`MEDIA = ${MEDIA.toFixed(1)}`)
    
} 
main()