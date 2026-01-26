import { Cache } from "./pokecache.js";
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    cache = new Cache(5000);
    constructor() { }
    async fetchLocations(pageURL) {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;
        if (this.cache.get(url)) {
            return this.cache.get(url);
        }
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Did not get a valid response: ${response.status}: ${response.statusText}`);
            }
            const locationsJSON = await response.json();
            this.cache.add(url, locationsJSON);
            return await locationsJSON;
        }
        catch (e) {
            throw new Error(`Error fetching locations: ${e.message}`);
        }
    }
    async fetchLocation(locationName) {
        try {
            const response = await fetch(`${PokeAPI.baseURL}/location-area/${locationName}`);
            if (!response.ok) {
                throw new Error(`Could not get a valid response: ${response.status}: ${response.statusText}`);
            }
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        catch (e) {
            throw new Error(`Error fetching location: ${e.message} `);
        }
    }
}
