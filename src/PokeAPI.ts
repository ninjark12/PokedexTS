import { error } from "node:console";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;
    try{
        const response = await fetch(url);
       if (!response.ok){
        throw new Error(`Did not get a valid response: ${response.status}: ${response.statusText}`);
       }
       const locationsJSON: ShallowLocations = await response.json();
       return await locationsJSON;
    }catch (e){
        throw new Error(`Error fetching locations: ${(e as Error).message}`)
    }    
  }

  async fetchLocation(locationName: string): Promise<Location> {
    
    try{  
        const response = await fetch(`${PokeAPI.baseURL}/location-area/${locationName}`);
        if (!response.ok){
            throw new Error(`Could not get a valid response: ${response.status}: ${response.statusText}`);
        }
        const jsonResponse: Location = await response.json()
        return jsonResponse;
    } catch (e){
        throw new Error(`Error fetching location: ${(e as Error).message} `);
    }
  }
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