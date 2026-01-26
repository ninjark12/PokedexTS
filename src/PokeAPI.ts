import { error } from "node:console";
import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  cache = new Cache(5000);  
  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;
    if (this.cache.get(url)){
        return this.cache.get(url);
    }
    try{
       const response = (await fetch(url));
       if (!response.ok){
        throw new Error(`Did not get a valid response: ${response.status}: ${response.statusText}`);
       }
       const locationsJSON: ShallowLocations = await response.json();
       this.cache.add(url,locationsJSON);
       return await locationsJSON;
    }catch (e){
        throw new Error(`Error fetching locations: ${(e as Error).message}`)
    }    
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url =  `${PokeAPI.baseURL}/location-area/${locationName}`;
    if (this.cache.get(url)){
        return this.cache.get(url);
    }
    try{  
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`Could not get a valid response: ${response.status}: ${response.statusText}`);
        }
        const locationJSON: Location = await response.json()
        this.cache.add(url,locationJSON);
        return locationJSON;
    } catch (e){
        throw new Error(`Error fetching location: ${(e as Error).message} `);
    }
  }

  async fetchPokemon(pokemonName: string): Promise<Pokemon>{
    const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
    if (this.cache.get(url)){
        return this.cache.get(url);
    }
    try{  
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`Could not get a valid response: ${response.status}: ${response.statusText}`);
        }
        const pokemonJSON: Pokemon = await response.json()
        this.cache.add(url,pokemonJSON);
        return pokemonJSON;
    } catch (e){
        throw new Error(`Error fetching location: ${(e as Error).message} `);
    }
  }
}






export type Pokemon = {
 
  base_experience: number
  weight: number
  height: number
  id: number
  location_area_encounters: string
  moves: {
    move: {
      name: string
      url: string
    }
    version_group_details: {
      level_learned_at: number
      move_learn_method: {
        name: string
        url: string
      }
      order: any
      version_group: {
        name: string
        url: string
      }
    }[]
  }[]
  name: string
  order: number
  
  sprites: {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    other: {
      home: {
        front_default: string
        front_female: any
        front_shiny: string
        front_shiny_female: any
      }
      "official-artwork": {
        front_default: string
        front_shiny: string
      }
      showdown: {
        back_default: string
        back_female: any
        back_shiny: string
        back_shiny_female: any
        front_default: string
        front_female: any
        front_shiny: string
        front_shiny_female: any
      }
    }
    
  }
  stats: {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }[]
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]

}


export type ShallowLocations = {
    previous: string | null,
    next: string | null,
    results: {
        name: string
        url: string
    }[]
};


export type Location = {
  encounter_method_rates: {
    encounter_method: {
      name: string
      url: string
    }
    version_details: {
      rate: number
      version: {
        name: string
        url: string
      }
    }[]
  }[]
  game_index: number
  id: number
  location: {
    name: string
    url: string
  }
  name: string
  names: {
    language: {
      name: string
      url: string
    }
    name: string
  }[]
  pokemon_encounters: {
    pokemon: {
      name: string
      url: string
    }
    version_details: {
      encounter_details: {
        chance: number
        condition_values: [] 
        max_level: number
        method: {
          name: string
          url: string
        }
        min_level: number
      }[]
      max_chance: number
      version: {
        name: string
        url: string
      }
    }[]
  }[]
};