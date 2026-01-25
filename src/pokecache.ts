export class CacheEntry<T>{
    createdAt: number;
    val: T;

    constructor (createdAt: number, val: T){
        this.createdAt = createdAt;
        this.val = val;
    }
}

export class Cache{
    #cache = new Map<string, CacheEntry<any>>();
    constructor () {}

    add<T>(key: string, val: T){
        const entry = new CacheEntry(Date.now(),val);
        this.#cache.set(key,entry);
    }

    get<T>(key: string){
        if (!this.#cache.get(key)){
            return undefined;
        }else{
            return this.#cache.get(key);
        }
    }


}