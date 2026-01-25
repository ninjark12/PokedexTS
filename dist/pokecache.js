import { clearInterval } from "node:timers";
export class CacheEntry {
    createdAt;
    val;
    constructor(createdAt, val) {
        this.createdAt = createdAt;
        this.val = val;
    }
}
export class Cache {
    #cache = new Map();
    #reapIntervalId = undefined;
    #interval = 1000; //interval in milliseconds
    constructor(interval) {
        this.#interval = interval;
        this.#startReapLoop();
    }
    add(key, val) {
        const entry = new CacheEntry(Date.now(), val);
        this.#cache.set(key, entry);
    }
    get(key) {
        if (!this.#cache.get(key)) {
            return undefined;
        }
        else {
            return this.#cache.get(key);
        }
    }
    #reap() {
        for (const [key, val] of this.#cache) {
            if (Date.now() - val.createdAt > Date.now() - this.#interval) {
                this.#cache.delete(key);
            }
        }
    }
    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => {
            this.#reap();
        }, this.#interval);
    }
    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}
