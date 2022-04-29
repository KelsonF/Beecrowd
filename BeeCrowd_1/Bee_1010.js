import { print,input } from "../io_utils.js";

function main(){ 
    var valor1 = Number(input("Digite o valor da peça: "))
    var numero1 = Number(input("Digite o numero da peça: "))
    var valor2 = Number(input("Digite o valor da peça:"))
    var numero2 = Number(input("Digite o numero da peça: "))
    
    var VALOR = (valor1*numero1) + (valor2*numero2)
    
    console.log(`VALOR A PAGAR: R$ ${VALOR.toFixed(2)}`)
    
    
}
main()