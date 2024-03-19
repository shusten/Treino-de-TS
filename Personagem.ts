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

    public status(): string {
        return (
        "Guerreiro: \n" + 
        "\nNome: " +
        this.nome + 
        ("\nEnergia: " + this.energia.toFixed(1)) +
        ("\nAtaque: " + this.ataque.toFixed(1)) +
        ("\nDefesa: " + this.defesa.toFixed(1))
        );
    }

    public treinarAtaque(): void {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        if(this.defesa > 100) {
            this.defesa = 0;
        }
    }

    public treinarDefesa(): void{
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;
        if(this.defesa > 100) {
            this.defesa = 0;
        }
    }

    public descansar(hora: number): void{
        this.energia += hora * Math.random() * 10;
        if (this.energia > 100) {
            this.energia = 100;
        } 
    }

    public batalhar(): number {
        let desgaste : number = Math.random() * 100;
        this.energia -= desgaste;
        return this.energia;
    }

    public isDead(): boolean {
        return this.energia < 0;
    }

    randomizar(fator: number): number {
        return Math.random() * fator;
    }
}
