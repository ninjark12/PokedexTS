import { Readline } from "readline/promises";
import { State } from "./state.js";
import { PokeAPI } from "./PokeAPI.js";
export async function commandMapb(state:State){
    const locations = await state.PokeAPI.fetchLocations(state.previousURL ?? "");
    state.nextURL = await locations.next;
    state.previousURL = await locations.previous;
    for (let i = 0; i < 20; i++) {
        console.log(locations.results[i]["name"]);
    }
    
    
}