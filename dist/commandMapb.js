export async function commandMapb(state) {
    const locations = await state.PokeAPI.fetchLocations(state.previousURL ?? "");
    state.nextURL = await locations.next;
    state.previousURL = await locations.previous;
    for (let i = 0; i < 20; i++) {
        console.log(locations.results[i]["name"]);
    }
    state.readline.prompt();
}
