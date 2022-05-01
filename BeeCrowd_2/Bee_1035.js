import { print,input } from "../io_utils.js";

function main(){
    const valores = input("Digite 4 numeros inteiros: ")
    const [A,B,C,D] = valores.split(" ").map(Number)
    
    const resultado = validacao(A,B,C,D)

    print(resultado)
}
function validacao(a,b,c,d){
    const validacao1 = b > c
    const validacao2 = d > a
    const validacao3 = c + d > a + b
    const validacao4 = c > 0 && d > 0
    const validacao5 = a % 2 === 0

    if(validacao1 && validacao2 && validacao3 && validacao4 && validacao5){
        return "Valores aceitos"
    }
    else{
        return "Valores nao aceitos"
    }
}
main()