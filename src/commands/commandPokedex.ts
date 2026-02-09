import { State } from "../state.js";
export async function commandPokedex(state:State){
   const pokedexSet = new Set(Object.keys(state.Pokedex)); 
   for (const key of pokedexSet){
    console.log(`- ${key}`);
   }
}