import prompt from 'prompt-sync'

export const input = prompt({
    sigint: false
})

export function print(mensagem, ...optionalParams){
    console.log(mensagem, ...optionalParams)
}

export function fibonacci(){
    const arrayFibonacci = new Array(60);
    let soma = 0
    let anterior = 0
    let atual = 1
    let j = 0

    for(let i = 0; i < arrayFibonacci.length; i++){
        soma = anterior + atual
        arrayFibonacci[j] = anterior
        anterior = atual
        atual = soma

        j++
    }

    return arrayFibonacci
}