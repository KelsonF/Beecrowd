import { input } from '../io_utils.js'

function main(){
    const vetor = new Array(10)

    for (let index = vetor.length - 1; index >= 0; index--) {

        vetor[index] = Number(input("Numero: "))
    
    }

    for(let elemento in vetor){
        console.log(`N[${elemento}] = ${vetor[elemento]}`)
    }

}

main()
