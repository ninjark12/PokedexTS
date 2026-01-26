import { createInterface } from "readline";
import { commandExit } from "./commandExit.js";
import { commandHelp } from "./commandHelp.js";
import { commandMap } from "./commandMap.js";
import { PokeAPI } from "./PokeAPI.js";
import { commandMapb } from "./commandMapb.js";
import { commandExplore } from "./commandExplore.js";
import { commandCatch } from "./commandCatch.js";
import { commandInspect } from "./commandInspect.js";
import { commandPokedex } from "./commandPokedex.js";
export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex >"
    });
    const commandRegistry = {
        exit: {
            name: "exit",
            description: "Exits the Pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
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
            description: "Usage:explore <area_name>\nreturns pokemon found in that area.",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "catch pokemon by doing: catch <pokemon name>",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "see the details for a pokemon you've caught",
            callback: commandInspect
        },
        pokedex: {
            name: "pokedex",
            description: "see what pokemon you have caught",
            callback: commandPokedex
        }
    };
    return { readline: rl, commands: commandRegistry, PokeAPI: new PokeAPI, previousURL: null, nextURL: null, Pokedex: {} };
}
