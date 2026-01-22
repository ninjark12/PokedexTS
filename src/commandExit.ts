import type { CLICommand } from "./commands.js";
export function commandExit(commands: Record<string,CLICommand>){
    console.log("\nClosing the Pokedex... Goodbye!");
    process.exit(0);
}