import { Mage } from "./src/Mage";
import { Priest } from './src/Priest';
import { Warrior } from './src/Warrior';
import { Personagem } from './src/Personagem';

let mage: Personagem = new Mage("Luis mage");
let priest: Personagem = new Priest("Covra Priest");
let warrior: Personagem = new Warrior("Carlos warriror");

console.log("mage :>> ", mage);
console.log("priest :>> ", priest);
console.log("warrior :>> ", warrior);

