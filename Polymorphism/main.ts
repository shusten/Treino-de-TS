import { Mage } from "./src/Mage";
import { Priest } from './src/Priest';
import { Personagem } from './src/Personagem';

let mage: Personagem = new Mage("Luis mage");
let priest: Personagem = new Priest("Covra Priest");

const personagens: Personagem[] = [];

personagens.push(mage);
personagens.push(priest);

personagens.forEach((p) => 
    console.log(p instanceof Mage? p.atacar: (p as Priest).atacar())
    
);