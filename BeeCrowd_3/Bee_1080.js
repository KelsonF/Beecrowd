import { print,input } from "../io_utils.js";

function main(){
    let contador = 1
    let valor

    let maior = Number(input(`Valor de posiçaõ ${contador}: `))
    let posição_do_maior = 1

    while(contador < 10){
        contador += 1

        valor = Number(input(`Valor de posiçaõ ${contador}: `))

        if(valor > maior){
            maior = valor
            posição_do_maior = contador
        }
    }
    print(`O maior valor é: ${maior}`)
    print(`Posição: ${posição_do_maior}`)
}
main()