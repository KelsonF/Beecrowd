import { print,input } from "../io_utils.js";

function main(){
    var A = Number(input("Digite o valor de A: "))
    var B = Number(input("Digite o valor de B: "))
    var C = Number(input("Digite o valor de C: "))
    var pi = 3.14159
    
    var area = A*C/2
    var area2 = (C*C)*pi
    var area3 = ((A +B)*C)/2
    var area4 = B*B
    var area5 = A*B
    
    print(`TRIANGULO: ${area.toFixed(3)}`)
    print(`CIRCULO: ${area2.toFixed(3)}`)
    print(`TRAPEZIO: ${area3.toFixed(3)}`)
    print(`QUADRADO: ${area4.toFixed(3)}`)
    print(`RETANGULO: ${area5.toFixed(3)}`)
}
main()