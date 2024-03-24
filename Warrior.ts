import { Util } from "./Util";

class Warrior {
    private _nome: string;
    private _armadura: number;
    private _vidaMaxima: number;
    private _vidaAtual: number;
    private _forca: number;
    private _agilidade: number;

    constructor(nome: string) {
        this._nome = nome;
        this._armadura = Util.randomizar(1_000, 10_000);
        this._vidaMaxima = Util.randomizar(200, 10_000);
        this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
        this._forca = Util.randomizar(100, 1_000);
        this._agilidade = Util.randomizar(100, 1_000);
    }
}