import type { CLICommand } from "./commands.js";

export function commandHelp(commands: Record<string,CLICommand>){
    console.log("\nWelcome to the Pokedex!\nUsage:\n");
    for (const command in commands){
        console.log(`${commands[command].name}: ${commands[command].description}`);
    }
    return;
}