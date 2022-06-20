import { input, fibonacci } from '../io_utils.js'

function main(){
    const T = Number(input("Numero: "));
    const vetor_fibonacci = fibonacci()
    let N = 0

    for (let index = 0; index < T; index++){
        for (let elemento in vetor_fibonacci){
            N = Number(input("Numero: "))
            elemento = N
            console.log(vetor_fibonacci[elemento])
        }  
    }

}


main()