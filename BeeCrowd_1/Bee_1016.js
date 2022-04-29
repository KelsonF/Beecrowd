import { print,input } from "../io_utils.js";

function main(){
    var tempo_entrada = Number(input("Informe a distancia em KM: "))
    const tempo_afastar = 2 
    
     var tempo = tempo_afastar * tempo_entrada
     print(`${tempo.toFixed(0)} minutos`)
}
main()

