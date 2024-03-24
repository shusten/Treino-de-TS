import { Util } from "./Util";

class Priest {
    private _nome: string;
    private _armadura: number;
    private _vidaMaxima: number;
    private _vidaAtual: number;
    private _espirito: number;
    private _versatilidade: number;

    constructor(nome: string) {
        this._nome = nome;
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(20, 1_000);
        this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
        this._espirito = Util.randomizar(100, 1_000);
        this._versatilidade = Util.randomizar(100, 1_000);
    }
}