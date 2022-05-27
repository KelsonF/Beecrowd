import { input, print } from '../../io_utils.js'

function main(){
    const nota_1 = obter_nota()
    const nota_2 = obter_nota()

    const media = (nota_1 + nota_2)/2

    print(`nota = ${media}`)
}

main()

function obter_nota(){
    //let i = 0
    // let valor = Number(lines[0])
    let valor = Number(input('Digite sua nota: '))

    while (valor < 0 || valor > 10){
        print('nota invalida')
        valor = Number(input('Digite sua nota: '))
        //valor = Number(lines[i++])
    }

    return valor
}