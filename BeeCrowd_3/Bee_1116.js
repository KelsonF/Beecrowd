import { input } from '../io_utils.js'

function main(){
    let contador = 0;
    let numeros_de_pares = Number(input("N: "));
    let x,y;
    let quociente;
    
    //let i = 1
    
    while(contador < numeros_de_pares){
        //[x,y] = lines[i++].split(" ").map(Number)
        let numeros = input("Numeros: ").split("/").map(Number);
        x = numeros[0];
        y = numeros[1];

        contador++

        if(y === 0){
            console.log("divisao impossivel")
            continue
        }

        quociente = x/y
        console.log(quociente.toFixed(1))
    }
}
main()