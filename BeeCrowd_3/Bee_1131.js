import { input, print } from '../io_utils.js'

function main(){
   let quantidade_jogos = 0
   let vit_gremio = 0
   let vit_inter = 0 
   let empates = 0
   let gol_gremio = 0
   let gol_inter = 0
   let jogo
   let pergunta = 1

    while(pergunta === 1){
        jogo = input("Resultado do jogo: ").split(" ").map(Number)
        gol_inter = jogo[0]
        gol_gremio = jogo[1]

        if(gol_inter > gol_gremio){
            vit_inter++
        }
        else if(gol_gremio > gol_inter){
            vit_gremio++
        }
        else{
            empates++
        }

        quantidade_jogos++
        
    print("Novo grenal (1-sim 2-nao)")
    pergunta = Number(input(""))
    }

const venceu_mais = quem_venceu_mais(vit_gremio,vit_inter)

print(`${quantidade_jogos} grenais`)
print(`Inter:${vit_inter}`)
print(`Gremio:${vit_gremio}`)
print(`Empates:${empates}`)
print(`${venceu_mais} venceu_mais`)

}
main()

function quem_venceu_mais(valor1,valor2){
    if(valor1 > valor2){
        return 'Gremio'
    }
    else if(valor2 > valor1){
        return 'Inter'
    }
}