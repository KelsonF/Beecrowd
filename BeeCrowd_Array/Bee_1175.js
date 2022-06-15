import { input } from '../io_utils.js'

function main(){
    const vetor = new Array(4)
    // let i = 0

    for (let index = vetor.length - 1; index >= 0; index--) {

        vetor[index] = Number(input("Numero: "))

        console.log(`N[${index}] = ${vetor[index]}`)
        // i++
    }

}

main()
