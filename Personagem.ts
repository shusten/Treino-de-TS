class Personagem {
    nome: string = '';
    energia: number = 0;
    vida: number = 0;
    ataque: number = 0;
    defesa: number = 0;
}

let luis: Personagem;

luis = new Personagem();
luis.nome = 'Luis';
luis.ataque = 10;
luis.defesa = 20;
luis.energia = 50;
luis.vida = 100;
console.log("Luis :>> ", luis);

let grazi: Personagem = new Personagem();

grazi.nome = 'Grazi';
grazi.ataque = 80;
grazi.defesa = 70;
grazi.energia = 90;
grazi.vida = 40;

console.log("Grazi :>> ", grazi);




