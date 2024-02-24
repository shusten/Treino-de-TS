import Personagem from "./Personagem";
import prompt from "prompt-sync";

let person: Personagem = new Personagem('Personagem', 50, 100, 10, 20);
/* let grazi: Personagem = new Personagem('Grazi', 90, 40, 80, 70); */

let keyboard = prompt();
let option: number = 0;

while (option != 9) {
    console.log("+==============Personagem==============+");
    console.log("|1. Treinar ataque                     |");
    console.log("|2. Treinar defesa                     |");
    console.log("|3. Descansar                          |");
    console.log("|4. Entrar em batalha                  |");
    console.log("|8. Imprimir atributos                 |");
    console.log("|9. Sair                               |");
    console.log("+======================================+");

    option = +keyboard("Escolha uma apção: ");

    switch (option) {
        case 1:
            person.treinarAtaque();
            person.stauts();
            break;
        case 2:
            person.treinarDefesa();
            person.stauts();
            break;
        case 3:
            person.energia += Math.random() * 10;
            if (person.energia > 100) {
              person.energia = 100;
            } 
            person.stauts();
            break;
        case 4:
            person.energia -= Math.random() * 100;
            if (person.energia < 0) {
                console.log('Ops! Você morreu!');
            }
            person.stauts();
            break;
        case 8:
            person.stauts();
            break;
        default:
        break;
    }
}