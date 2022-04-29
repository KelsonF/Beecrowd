import { print,input } from "../io_utils.js";

function main(){
    
    var NOME = Number(input("Nome do funcionario: "))
    var SALARIO = Number(input("Informe o salario padrao: "))
    var VENDAS = Number(input("Informe o valor de vendas"))
    
    var TOTAL = (SALARIO + (VENDAS*15/100))
    
    console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`)
    
}
main()
