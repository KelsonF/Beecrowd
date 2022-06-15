import { input,print } from '../io_utils.js'

function main(){
    const vetor_a = new Array(5)

    for (let index = 0; index < vetor_a.length; index++) {
        vetor_a[index] = Number(input("Numero: "))

        if(elementos_menores_que_10(vetor_a)){
            console.log(`A[${index}] = ${vetor_a[index]}`)
        }
        
    }
}

function elementos_menores_que_10(array){
    for(let elemento of array){
        if(elemento <= 10){
            return true
        }
    }
    return false
}

main()