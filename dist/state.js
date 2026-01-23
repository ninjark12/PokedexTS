import { createInterface } from "readline";
import { commandExit } from "./commandExit.js";
import { commandHelp } from "./commandHelp.js";
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
    };
    return { readline: rl, commands: commandRegistry };
}
