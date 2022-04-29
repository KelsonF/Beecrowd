import { print,input } from "../io_utils.js";

function main(){
    var NUMBER = Number(input("Digite o numero do funcionario: "))
    var horas = Number(input("Digite o numero de horas trabalhadas: "))
    var receber = Number(input("Informe o valor por hora recebido: "))
    
    var SALARY = (horas * receber)

    print(`NUMBER = ${NUMBER}`)
    print(`SALARY = U$ ${SALARY.toFixed(2)}`)
}
main()