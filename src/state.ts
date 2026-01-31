import { createInterface, type Interface } from "readline";
import { PokeAPI, Pokemon } from "./PokeAPI.js";
import { CLICommand, commandRegistry } from "./commands/commandRegistry.js";
export type State = {
    commands: Record<string,CLICommand>;
    readline: Interface;
    PokeAPI: PokeAPI;
    previousURL: string | null;
    nextURL: string | null;
    Pokedex: Record<string, Pokemon>;
}



export function initState(): State{
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "Pokedex >"
    });

    return {readline: rl, commands: commandRegistry, PokeAPI: new PokeAPI, previousURL: null, nextURL: null,Pokedex:{}};
}