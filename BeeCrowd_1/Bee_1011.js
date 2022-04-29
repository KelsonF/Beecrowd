import { print,input } from "../io_utils.js";

function main(){
    var R = Number(input("Digite o valor do raio: "))
    var pi = 3.14159
    
    var area = (4*pi*R**3)/3
    
    print(`VOLUME = ${area.toFixed(3)}`)
    
}
main()