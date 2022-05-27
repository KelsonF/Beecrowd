import { input, print } from '../io_utils.js'

function main(){
    const X = Number(input("Digite um numero inteiro X: "))
    const Y = Number(input("Digite um numero inteiro Y: "))

    let maior_numero = maior(X,Y)
    let menor_numero = menor(X,Y)

    let soma_numero = 0

    while (menor_numero <= maior_numero){
        if (menor_numero % 13 !== 0){
            soma_numero += menor_numero
        }
    
    menor_numero++

    }
    print(soma_numero)
}
main()

function maior(x,y){
    if(x > y){
        return x
    }
    else{
        return y
    }
}
function menor(x,y){
    if(x > y){
        return y
    }
    else{
        return x
    }
}
