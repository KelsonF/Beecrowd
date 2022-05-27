import { input } from '../../io_utils.js'

function main(){
    let contador 
    let numeros_de_pares = Number(input('Digite um valor: '))
    let pares_de_numeros
    let x,y
    let quociente
    

    while(numeros_de_pares > contador){
        pares_de_numeros.split(" ")
        x = pares_de_numeros[0]
        y = pares_de_numeros[1]

        contador++

        if(y === 0){
            print("divisao impossivel")
            continue
        }

        quociente = x/y
        print(quociente.toFixed(2))
    }
}
main()