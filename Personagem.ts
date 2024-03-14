export default class Personagem {   
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number,
    ) {}

    // SEMPRE QUE PENSAR EM LER DADOS NA CLASSE - USE PARÂMETRO
    // SEMPRE QUE PENSAR EM IMPRIMIR NA CLASSE - USE RETORNO

    stauts(): void{
        console.log("Guerreiro: ");
        console.log("Nome: ", this.nome);
        console.log("Energia: ", this.energia.toFixed(1));
        console.log("Ataque: ", this.ataque.toFixed(1));
        console.log("Defesa: ", this.defesa.toFixed(1));
    }

    treinarAtaque(): void {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        if(this.defesa > 100) {
            this.defesa = 0;
        }
    }

    treinarDefesa(): void{
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;
        if(this.defesa > 100) {
            this.defesa = 0;
        }
    }

    descansar(): void{
        this.energia += Math.random() * 10;
        if (this.energia > 100) {
            this.energia = 100;
        } 
    }

    batalhar(): number {
        let desgaste : number = Math.random() * 100;
        this.energia -= desgaste;
        return this.energia;
    }

    isDead(): boolean {
        if (this.energia < 0) {
            console.log('Ops! Você morreu!');
            return true;
        } else {
            return false;
        }
    }
}
