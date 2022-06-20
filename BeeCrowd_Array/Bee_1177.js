

import { input } from '../io_utils.js'

function main(){
    const vetor = new Array(1000);
    const N = Number(input("Valor N: "))
    let elemento = 0 

    for (let index = 0; index < vetor.length; index++) {
        //Funcao quando nao atende a condicao volta ao seu estado inicial 
        if(i < N){
            vetor[index] = elemento
            console.log(`N[${index}] = ${elemento}`)
            elemento++
        }
        else{
            elemento = 0
            vetor[index] = elemento
            console.log(`N[${index}] = ${elemento}`)
            elemento++
        }
        
    }
}

main()