import { print,input } from "../io_utils.js";

function main(){
    const codigo = Number(input("Digite o codigo do produto: "))
    const quantidade = Number(input("Digite a quantidade desejada: "))

    const resultado = conta(codigo,quantidade)

    print(`Total: R$ ${resultado.toFixed(2)}`)
}
function conta(c,q){
    if(c === 1){
        return (4.00 * q)
    }
    else if(c === 2){
        return (4.50 * q)
    }
    else if(c === 3){
        return (5.00 * q)
    }
    else if(c === 4){
        return (2.00 * q)
    }
    else if(c === 5){
        return (1.50 * q)
    }
}
main()