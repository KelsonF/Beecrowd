import { print,input } from "../io_utils.js";

function main(){
    var a = Number(input("Digite um numero: "))
    var b = Number(input("Digite um numero: "))
    var c = Number(input("Digite um numero: "))

    const result = Math.max(a,b,c)
    
    print(`${result.toFixed(0)} eh o maior`)
}

main()