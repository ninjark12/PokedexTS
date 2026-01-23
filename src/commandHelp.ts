import type { State } from "./state.js";

export function commandHelp(state: State){ 
    console.log("\nWelcome to the Pokedex!\nUsage:\n");
    for (const command in state.commands){
        console.log(`${state.commands[command].name}: ${state.commands[command].description}`);
    }
    return;
}