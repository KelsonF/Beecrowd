import { print,input } from "./io_utils.js";

function main(){
    var p1x1 = Number(input("Informe o p1x1: "))
    var p1y1 = Number(input("Informe o p1y1: "))
    var p2x2 = Number(input("Informe o p2x2"))
    var p2y2 = Number(input("Informe o p2y2: "))
    
   var distancia = Math.sqrt((p2x2-p1x1)**2 + (p2y2 - p1y1)**2) 
   
   print(distancia.toFixed(4))
}
main()