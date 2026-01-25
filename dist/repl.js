export function cleanInput(input) {
    return input.trim().toLowerCase().split(" ");
}
export async function startREPL(state) {
    state.readline.prompt();
    state.readline.on('line', (line) => {
        const command = cleanInput(line)[0];
        if (!command) {
            state.readline.prompt;
            return;
        }
        else {
            const commands = state.commands;
            const cmd = commands[command];
            if (cmd) {
                try {
                    cmd.callback(state);
                    state.readline.prompt();
                }
                catch (error) {
                    console.log(error);
                }
            }
            else {
                console.log("Unknown command");
                state.readline.prompt();
            }
        }
    });
}
