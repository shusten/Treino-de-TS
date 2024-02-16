import prompt from 'prompt-sync';

class Personagem {   
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number,
    ) {}
}


let luis: Personagem;
let grazi: Personagem;

let keyboard = prompt();
let option: number = 0;

while (option != 9) {
    console.log("+==============Personagem==============+");
    console.log("|1. Treinar ataque                     |");
    console.log("|2. Treinar defesa                     |");
    console.log("|3. Imprimir atributos                 |");
    console.log("|9. Sair                               |");
    console.log("+======================================+");

    option = +keyboard("Escolha uma opção");

    switch (option) {
        case 1:
            luis.ataque += 2;
            break;
    
        default:
            break;
    }
}

luis = new Personagem('Luis', 50, 100, 10, 20);
grazi = new Personagem('Grazi', 90, 40, 80, 70);


