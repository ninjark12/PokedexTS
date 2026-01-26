import { createInterface, type Interface } from "readline";
import { commandExit } from "./commandExit.js";
import { commandHelp } from "./commandHelp.js";
import { commandMap } from "./commandMap.js";
import { PokeAPI } from "./PokeAPI.js";
import { commandMapb } from "./commandMapb.js";
import { commandExplore } from "./commandExplore.js";
export type State = {
    commands: Record<string,CLICommand>;
    readline: Interface;
    PokeAPI: PokeAPI;
    previousURL: string | null;
    nextURL: string | null;
}

export type CLICommand = {
    name: string,
    description: string,
    callback: (state: State, args: string[]) => Promise<void>;
}

export function initState(): State{
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "Pokedex >"
    });
   
    const commandRegistry={
        exit:{
            name:"exit",
            description:"Exits the Pokedex",
            callback: commandExit,
        },
        help: {
            name:"help",
            description:"Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays the next 20 locations",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays the previous 20 locations",
            callback: commandMapb,
        },
        explore: {
            name: "explore",
            description: "Usage:\nexplore <area_name>\nreturns pokemon found in that area.",
            callback: commandExplore,
        }

    }

    return {readline: rl, commands: commandRegistry, PokeAPI: new PokeAPI, previousURL: null, nextURL: null};
}