import { print,input } from "../io_utils.js";

function main(){
    const pontos = input("Digite os valores das coordenadas X,Y: ")
    const [X,Y] = pontos.split(" ").map(Number)

    const resultadoc = localizar_quadrante(X,Y)

    print(resultadoc)
}
function localizar_quadrante(x,y){
    if(x === 0 && y === 0){
        return "Origem"
    }
    else if(x === 0){
        return "Eixo Y"
    }
    else if(y === 0){
        return "Eixo X"
    }
    else if(x>0 && y>0){
        return "Q1"
    }
    else if(x<0 && y>0){
        return "Q2"
    }
    else if(x<0 && Y<0){
        return "Q3"
    }
    else{
        return "Q4"
    }
}
main()