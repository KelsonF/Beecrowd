import { input,print } from '../io_utils.js'

function main(){
    let quantidade_de_vezes = Number(input("Quantidade: "))
    let contador = 0
    let num1 = 0
    let num2 = 0
    let num3 = 0

    while(contador < quantidade_de_vezes){
        num1 = 1 + (contador * 4)
        num2 = 2 + (contador * 4)
        num3 = 3 + (contador * 4)

        contador++

        print(`${num1} ${num2} ${num3} PUM`)
    }
}
main()