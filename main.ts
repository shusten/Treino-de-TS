import { Mage } from "./Mage";
import { Priest } from './Priest';
import { Warrior } from './Warrior';
import { Personagem } from './Personagem';

let mage: Personagem = new Mage("Luis mage");
let priest: Personagem = new Priest("Covra Priest");
let warrior: Personagem = new Warrior("Carlos warriror");

console.log("mage :>> ", mage);
console.log("priest :>> ", priest);
console.log("warrior :>> ", warrior);

