export async function commandExplore(state, args) {
    const locationName = args[1];
    if (!locationName) {
        console.log("Use map or mapb to find a location you want to explore and explore it by using: explore <area_name>");
        state.readline.prompt();
    }
    else {
        try {
            const location = await state.PokeAPI.fetchLocation(args[1]);
            const pokemon = location.pokemon_encounters;
            console.log(`Exploring ${locationName}...`);
            if (!pokemon) {
                console.log("No Pokemon found");
            }
            else {
                console.log("Found Pokemon:");
                for (const mon of pokemon) {
                    console.log(`- ${mon.pokemon.name}`);
                }
            }
        }
        catch (e) {
            console.log("That location doesn't exist.");
        }
        state.readline.prompt();
    }
}
