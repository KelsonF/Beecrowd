import { input } from '../io_utils.js'

function main(){
    const N = Number(input("Numero: "));
    const vetor = new Array(N);
    let menor = 10000000000
    let menorPosicao = 0

    for (let index = 0; index < vetor.length; index++) {
        vetor[index] = Number(input("Valores: "))
        
    }
    console.log(vetor)

    for(let elemento in vetor){
        if(vetor[elemento] < menor){
            menor = vetor[elemento]
            menorPosicao = elemento
        }
       
    }

    console.log(`Menor valor: ${menor}`)
    console.log(`Posicao: ${menorPosicao}`)
}

main()