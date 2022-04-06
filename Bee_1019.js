import { print,input } from "./io_utils.js";

function main(){
    var N = Number(input("Informe a duracao do evento: "))
    var horas = Math.trunc(N/3600)
    var resto = N % 3600
    var minutos = Math.trunc(resto/60)
    var segundos = resto % 60
    
    print(`${horas}:${minutos}:${segundos}`)
}
main()