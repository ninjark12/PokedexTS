export function commandHelp(commands) {
    console.log("\nWelcome to the Pokedex!\nUsage:\n");
    for (const command in commands) {
        console.log(`${commands[command].name}: ${commands[command].description}`);
    }
    return;
}
