import { startREPL } from "./repl.js";
import { initState, type State } from "./state.js";
async function main(){
	const state = initState();
	await startREPL(state);
}


main();