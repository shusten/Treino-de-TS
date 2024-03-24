import { Util } from "./Util";

class Mage {
    private _nome: string;
    private _armadura: number;
    private _vidaMaxima: number;
    private _vidaAtual: number;
    private _intelecto: number;
    private _velocidade: number;

    constructor(nome: string) {
        this._nome = nome;
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(200, 1_000);
        this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
        this._intelecto = Util.randomizar(100, 1_000);
        this._velocidade = Util.randomizar(10, 2_000);
    }
}