import { input,print } from '../io_utils.js'

function main(){
    const vetor = new Array(10)
    vetor[0] = Number(input("Numero: "))

    let numero = vetor[0]

    for (let index = 1; index < vetor.length; index++){
        if(vetor[0] <= 50){
            numero *= 2
            vetor[index] = numero

            console.log(`N[${index}] = ${vetor[index]}`)
        }    
    }
}
main()