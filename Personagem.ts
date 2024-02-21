export default class Personagem {   
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number,
    ) {}

    stauts(): void {
        console.log("Guerreiro: ");
        console.log("Nome: ", this.nome);
        console.log("Energia: ", this.energia.toFixed(1));
        console.log("Ataque: ", this.ataque.toFixed(1));
        console.log("Defesa: ", this.defesa.toFixed(1));
    }

    atacar(): void {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        if (this.energia < 0) {
            console.log('Ops! Você morreu!');
        } else {
            if(this.defesa > 100) {
                this.defesa = 0;
            }
        }
    }
}
