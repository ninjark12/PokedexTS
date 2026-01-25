export async function commandExit(state) {
    console.log("\nClosing the Pokedex... Goodbye!");
    state.readline.close();
    process.exit(0);
}
