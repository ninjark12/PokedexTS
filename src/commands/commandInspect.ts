import { State } from "../state.js";
export async function commandInspect(state:State, args: string[]){
    const pokemonName = args[0];
    if (!pokemonName){
        console.log("usage: inspect <pokemon_name>");
        return;
    }
    const pokeInfo = state.Pokedex[pokemonName];
    if(!pokeInfo){
        console.log("you have not caught that pokemon yet");
        return;
    }
    
   console.log(`Name: ${pokemonName}`);
   console.log(`Height: ${pokeInfo.height}`);     
   console.log(`Weight: ${pokeInfo.weight}`);
   console.log(`Stats:`);
   for (const key in pokeInfo.stats){
    console.log(`  -${pokeInfo.stats[key].stat.name}: ${pokeInfo.stats[key].base_stat} `)
   }
   console.log("Types:")
   
   for (const key in pokeInfo.types){
    console.log(`  - ${pokeInfo.types[key].type.name} `);
   }
}