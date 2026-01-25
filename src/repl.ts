import type { State } from "./state.js";
export function cleanInput(input: String): string[]{
  return input.trim().toLowerCase().split(" ");
      
}




export async function startREPL(state: State){
  state.readline.prompt();
  state.readline.on('line', (line: string) => {
    const command: string = cleanInput(line)[0];
    if (!command){
      state.readline.prompt();
      return;
    }
    else{
      const commands = state.commands;
      const cmd = commands[command];    
      if (cmd){
       try{ 
        cmd.callback(state);
       } catch (error){
        console.log(error);
       } 
      } else {
       console.log("Unknown command");
       state.readline.prompt();      
      }
    } 
  });


}