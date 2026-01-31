# PokedexTS

A REPL-style Pokédex CLI written in **TypeScript** that interacts with the public **PokeAPI**.  
Explore Pokémon locations, encounter Pokémon, catch them, and inspect your personal Pokédex — all from the terminal.

---

## Features

- Interactive terminal REPL
- Browse Pokémon location areas with pagination
- Explore a location area to see possible Pokémon encounters
- Catch Pokémon with a chance-based mechanic
- View and inspect Pokémon you’ve caught
- In-memory Pokédex for the current session
- Built-in caching to reduce repeated API calls
- Unit tests for core utilities and API logic

---

## Tech Stack

- **TypeScript (ESM)**
- **Node.js**
- **PokeAPI**: https://pokeapi.co/
- **Vitest** for testing

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)

### Install
    npm install

### Run (development)
    npm run dev

### Build and run
    npm run build
    npm start

---

## Commands

Run `help` in the REPL at any time to see available commands.

### help
Prints a list of available commands and their descriptions.

### exit
Exits the application.

### map
Displays the next page of Pokémon location areas (20 at a time).

### mapb
Displays the previous page of Pokémon location areas.

### explore <location_area>
Fetches a location area and lists the Pokémon that can be encountered there.

Example:
    Pokedex > explore canalave-city-area

### catch <pokemon_name>
Attempts to catch the specified Pokémon using a chance-based mechanic.

Example:
    Pokedex > catch pikachu

### pokedex
Lists all Pokémon you’ve caught in the current session.

### inspect <pokemon_name>
Displays details for a Pokémon you’ve already caught, including:
- Height
- Weight
- Stats
- Types

Example:
    Pokedex > inspect pikachu

---

## Design Notes

- Commands are decoupled from REPL control flow for testability
- API requests are cached to improve responsiveness and reduce network load
- Error handling is centralized to keep command logic simple
- The Pokédex is intentionally in-memory to keep the project focused on CLI design and API interaction

---

## Possible Improvements

- Persist Pokédex data to disk between sessions
- Improve catch mechanics and balancing
- More interactive exploration


