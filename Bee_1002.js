import { print,input } from "./io_utils.js";

function main(){
    var raio = Number(input('Digite o numero do raio: '))
    var π = 3.14159
    var area =  π*raio**2
    
    print(`A=${area.toFixed(4)}`)
    
}

main()