class Personagem {
    nome: string = '';
    energia: number = 0;
    vida: number = 0;
    ataque: number = 0;
    defesa: number = 0;
}

let person: Personagem;
person = new Personagem();
console.log("Person :>> ", person);
