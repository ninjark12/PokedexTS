export async function commandPokedex(state) {
    const pokedexSet = new Set(Object.keys(state.Pokedex));
    for (const key of pokedexSet) {
        console.log(`- ${key}`);
    }
    state.readline.prompt();
}
