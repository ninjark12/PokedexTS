const reset = '\x1b[0m';
const red = '\x1b[31m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const blue = '\x1b[34m';
export async function commandCatch(state, args) {
    const pokemonName = args[1];
    if (!pokemonName) {
        console.log("usage: catch <pokemon_name>");
    }
    try {
        const pokemonResp = await state.PokeAPI.fetchPokemon(pokemonName);
        const pokemonBaseExp = pokemonResp.base_experience;
        console.log(blue + `Throwing a Pokeball at ${pokemonName}...` + reset);
        let chance = Math.round(Math.random() * (pokemonBaseExp / 15));
        if (chance == 1) {
            console.log(`${pokemonName} was caught!`);
            console.log(`Inspect it with: inspect ${pokemonName}`);
            state.Pokedex[pokemonName] = pokemonResp;
        }
        else {
            console.log(`${pokemonName} escaped!`);
        }
    }
    catch (e) {
        console.log("That pokemon doesn't exist.");
    }
    state.readline.prompt();
}
