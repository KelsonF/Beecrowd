import { print,input } from "./io_utils.js";

function main(){
    var tempo = Number(input("Digite a idade em segundos: "))
    
    var anos = Math.trunc(tempo/365)
    var resto = tempo % 365
    var meses = Math.trunc(resto/30)
    var dias = resto % 30
    
    print(`${anos} ano(s)`)
    print(`${meses} mes(es)`)
    print(`${dias} dia(s)`)
}
main()