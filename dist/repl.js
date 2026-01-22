import { getCommands } from "./commands.js";
export function cleanInput(input) {
    return input.trim().toLowerCase().split(" ");
}
import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex >"
});
export function startREPL() {
    rl.prompt();
    rl.on('line', (line) => {
        const command = cleanInput(line)[0];
        if (!command) {
            rl.prompt;
            return;
        }
        else {
            const commands = getCommands();
            const cmd = commands[command];
            if (cmd) {
                try {
                    cmd.callback(commands);
                    rl.prompt();
                }
                catch (error) {
                    console.log(error);
                }
            }
            else {
                console.log("Unknown command");
                rl.prompt();
            }
        }
    });
}
