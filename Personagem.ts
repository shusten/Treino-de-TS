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

luis = new Personagem('Luis', 50, 100, 10, 20);
console.log("Luis :>> ", luis);


let grazi: Personagem;

grazi = new Personagem('Grazi', 90, 40, 80, 70);
console.log("Grazi :>> ", grazi);




