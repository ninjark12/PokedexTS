import type { State } from "./state.js";

export function cleanInput(input: string): string[]{
  return input.trim().toLowerCase().split(" ");
      
}


export async function startREPL(state: State){
  state.readline.prompt();
  state.readline.on('line', async (line: string) => {
    const cleanedInput = cleanInput(line);
    const command: string = cleanedInput[0];
    const args: string[] = cleanedInput.slice(1) ?? "";
    
    if (!command){
      state.readline.prompt();
      return;
    }
    else{
      const commands = state.commands;
      const cmd = commands[command];    
      if (cmd){
       try{ 
        await cmd.callback(state,args);
        state.readline.prompt();
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