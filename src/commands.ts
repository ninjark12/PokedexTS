import process from "node:process";
import {commandExit} from "./commandExit.js";
import {commandHelp} from "./commandHelp.js";
export type CLICommand = {
    name: string,
    description: string,
    callback: (commands: Record<string, CLICommand>) => void;
}



export function getCommands(): Record<string,CLICommand> {
    return{
        exit:{
            name:"exit",
            description:"Exits the Pokedex",
            callback: commandExit,
        },
        help: {
            name:"help",
            description:"Displays a help message",
            callback: commandHelp,
        }
    }

}