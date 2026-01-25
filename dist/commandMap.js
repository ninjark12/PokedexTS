export async function commandMap(state) {
    const locations = await state.PokeAPI.fetchLocations(state.nextURL ?? "");
    state.nextURL = await locations.next;
    state.previousURL = await locations.previous;
    for (let i = 0; i < 20; i++) {
        console.log(locations.results[i]["name"]);
    }
    state.readline.prompt();
}
