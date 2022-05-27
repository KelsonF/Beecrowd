import { print,input } from "../io_utils.js";

function main(){
    let senha = Number(input("Digite a sua senha: "))
    
    while(senha !== 2002){
        print('Senha Invalida')
        senha = Number(input("Digite a sua senha novamente: "))
    }
    print("Acesso Permitido")
}
main()