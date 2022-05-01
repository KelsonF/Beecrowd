import { print,input } from "../io_utils.js";

function main(){
    const valores = (input("Digite 3 valores tipo float: "))
    const [A,B,C] = valores.split(" ").map(Number)

    const resultado = calcular_raizes(A,B,C)
    if(!resultado){
        console.log("Impossivel calcular")
    }
    else{
    print(`R1 = ${resultado[0].toFixed(5)}`)
    print(`R2 = ${resultado[1].toFixed(5)}`)
}
}
function calcular_raizes(a,b,c){
    if (a === 0){
        return false
    }
    const delta = (b**2)-(4*a*c)

    if(delta < 0){
        return false
    }
    const raiz_after_baskara = (-b+Math.sqrt(delta))/(2*a)
    const raiz_after_baskara2 = (-b-Math.sqrt(delta))/(2*a)
    return [raiz_after_baskara,raiz_after_baskara2]
}
main()