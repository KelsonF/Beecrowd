import { print,input } from "../io_utils.js";

function main(){
    var A = Number(input("Digite um valor: "))
    var B = Number(input("Digite um valor: "))
    var pesoA = 3.5
    var pesoB = 7.5
    var MEDIA = ((A*pesoA) + (B*pesoB))/ (pesoA + pesoB)
    print(`MEDIA = ${MEDIA.toFixed(5)}`)
}
main()