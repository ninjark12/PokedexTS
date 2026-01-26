import { State } from "./state.js"
export async function commandExplore(state:State, args: string[]){
    if (!args[1]){
        console.log("Use map or mapb to find a location you want to explore and explore it by using: explore <area_name>");
        state.readline.prompt();
    }else{
       const location = await state.PokeAPI.fetchLocation(args[1]);
       const pokemon = location.pokemon_encounters;
       for (const mon of pokemon ){
        console.log(`- ${mon.pokemon.name}`);
       }
       state.readline.prompt();
    }
}