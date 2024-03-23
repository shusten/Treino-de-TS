export default class Personagem {   
    constructor(
        public _nome: string,
        public _energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number,
    ) {}

    // SEMPRE QUE PENSAR EM LER DADOS NA CLASSE - USE PARÂMETRO
    // SEMPRE QUE PENSAR EM IMPRIMIR NA CLASSE - USE RETORNO

    
    public get nome() : string {
        return this._nome;
    }

    
    public set nome(nome : string) {
        this._nome = nome;
    }
    
    

    public status(): string {
        return (
        "Guerreiro: \n" + 
        "\nNome: " +
        this._nome + 
        ("\nEnergia: " + this._energia.toFixed(1)) +
        ("\nAtaque: " + this.ataque.toFixed(1)) +
        ("\nDefesa: " + this.defesa.toFixed(1))
        );
    }

    public treinarAtaque(): void {
        this.ataque += this.randomizar(7);
        this._energia -= this.randomizar(10);
        if(this.defesa > 100) {
            this.defesa = 0;
        }
    }

    public treinarDefesa(): void{
        this.defesa += this.randomizar(5);
        this._energia -= this.randomizar(10);
        if(this.defesa > 100) {
            this.defesa = 0;
        }
    }

    public descansar(hora: number): void{
        this._energia += hora * this.randomizar(10);
        if (this._energia > 100) {
            this._energia = 100;
        } 
    }

    public batalhar(): number {
        let desgaste : number = this.randomizar(10);
        this._energia -= desgaste;
        return this._energia;
    }

    public isDead(): boolean {
        return this._energia < 0;
    }

    randomizar(fator: number): number {
        return Math.random() * fator;
    }
}
