import { print,input } from "./io_utils.js";

function main(){
    var tempo = Number(input("Tempo: "))
    var velocidade = Number(input("Velocidade: "))
    const consumo = 12 //Km/l
    
    var distancia = tempo * velocidade
    var gasolina = distancia / consumo
    
    print(gasolina.toFixed(3))
    
}
main()