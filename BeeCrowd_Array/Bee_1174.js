import { input,print } from '../io_utils.js'

function main(){
    let vetor = new Array(100)

    for(let index = 0; index < vetor.length; index++) {

        vetor[index] = Number(input("Numero: "))

    }

    for (let item in vetor) {
        if(menor_igual_a_10(vetor)){
            console.log(`A[${item}] = ${vetor[item]}`)
        }
    }
   
}

function menor_igual_a_10(vetor){
    for(let elemento in vetor){
        if(elemento[vetor] <= 10){
            return true
        }
    }
    return false
}

main()