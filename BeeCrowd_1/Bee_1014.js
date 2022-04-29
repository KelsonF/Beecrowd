import { print,input } from "../io_utils.js";

function main(){
    var X = Number(input("Informe a distancia percorrida em km: "))
    var Y = Number(input("Informe a quantidade de combustivel gasto: "))
    
    var consumo = X/Y
    
    print(`${consumo.toFixed(3)} km/l `)
    
}
main()