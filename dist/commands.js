import { commandExit } from "./commandExit.js";
import { commandHelp } from "./commandHelp.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the Pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        }
    };
}
