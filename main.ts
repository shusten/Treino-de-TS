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
            person.ataque += Math.random() * 7;
            person.energia -= Math.random() * 10;
            if (person.energia < 0) {
                console.log('Ops! Você morreu!');
            } else {
                if(person.defesa > 100) {
                    person.defesa = 0;
                }
            }
            break;
        case 2:
            person.defesa += Math.random() * 5;
            person.energia -= Math.random() * 10;
            if (person.energia < 0) {
                console.log('Ops! Você morreu!');
            } else {
                if(person.defesa > 100) {
                    person.defesa = 0;
                }
            }
            break;
        case 3:
            person.energia += Math.random() * 10;
            if (person.energia > 100) {
              person.energia = 100;
            } 
            break;
        case 4:
            person.energia -= Math.random() * 100;
            if (person.energia < 0) {
                console.log('Ops! Você morreu!');
            }
            break;
        case 8:
            console.log("Guerreiro: ");
            console.log("Nome: ", person.nome);
            console.log("Energia: ", person.energia.toFixed(1));
            console.log("Ataque: ", person.ataque.toFixed(1));
            console.log("Defesa: ", person.defesa.toFixed(1));
            break;
        default:
        break;
    }
}