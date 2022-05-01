import { print,input } from "../io_utils.js";

function main(){
    const notas = input("Digite as notas do aluno: ")
    const [n1,n2,n3,n4] = notas.split(" ").map(Number)

    const media = analise_do_aluno(n1,n2,n3,n4)
    if(media>=7){
        print(`Media: ${media.toFixed(1)}`)
        print("Aluno aprovado.")
    }
    else if(media<5){
        print(`Media: ${media.toFixed(1)}`)
        print("Aluno reprovado.")
    }
    else{
        const nota_exame_final = Number(input("Digite o valor da nota do exame final: "))
        const media_final = exame_final_aluno(media,nota_exame_final)
        print(`Media: ${media.toFixed(1)}`)
        print(`Aluno em exame.`)
        print(`Nota do exame: ${nota_exame_final.toFixed(1)}`)
        if (media_final >= 5) {
            print(`Aluno aprovado.`)
        } else {
            print(`Aluno reprovado.`)
        }
        console.log(`Media final: ${media_final.toFixed(1)}`)
    }
}
function analise_do_aluno(n1,n2,n3,n4){
    const media =  (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / (2 + 3 + 4 + 1)
    return media
}
function exame_final_aluno(media,nota_exame_final){
    return (media + nota_exame_final)/2
}
main()