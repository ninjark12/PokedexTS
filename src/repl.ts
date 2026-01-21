export function cleanInput(input: String): string[]{
  return input.trim().toLowerCase().split(" ");
      
}


import { createInterface } from "readline";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex >"
});

export function startREPL(){
  rl.prompt();
  rl.on('line', (line: string) => {
    let command = cleanInput(line)[0];
    if (command === null){
      rl.prompt;
      return;
    }
    else{
      console.log(`Your command was: ${command}`);
      rl.prompt();
    } 
  });


}