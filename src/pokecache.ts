import { clearInterval } from "node:timers";

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
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number = 1000; //interval in milliseconds
    constructor (interval: number) {
        this.#interval = interval;
        this.#startReapLoop();
    }

    add<T>(key: string, val: T){
        const entry = new CacheEntry(Date.now(),val);
        this.#cache.set(key,entry);
    }

    get<T>(key: string){
        if (!this.#cache.get(key)){
            return undefined;
        }else{
            return this.#cache.get(key)?.val;
        }
    }

    #reap(){
        const now = Date.now();
        for (const [key,val] of this.#cache){
            if (now - val.createdAt > this.#interval){
                this.#cache.delete(key);
            }
        }
    }

    #startReapLoop(){
        this.#reapIntervalId = setInterval(() => {
            this.#reap();
        }, this.#interval);

    }

    stopReapLoop(){
        if(this.#reapIntervalId !== undefined){
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined;
        }
        
    }
}