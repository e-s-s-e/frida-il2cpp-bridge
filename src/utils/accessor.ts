import { closest } from "fastest-levenshtein";
import { raise } from "./console";

/** @internal */
export const filterAndMap = Symbol();

/**
 * An iterable class with a string index signature.\
 * Upon key clashes, a suffix `_${number}`is appended to the latest key.
 * ```typescript
 * const accessor = new Accessor<string>();
 * accessor.hello = 0;
 * accessor.hello = 1; // Adding the same key!
 * accessor.hello = 2; // Adding the same key, again!
 * Object.keys(accessor); // hello, hello_1, hello_2
 * ```
 */
export class Accessor<T> implements Iterable<T> {
    /** @internal */
    constructor(keyClashProtection = false) {
        return new Proxy(this, {
            set(target: Accessor<T>, key: PropertyKey, value: T): boolean {
                if (typeof key == "string") {
                    // const basename = key.replace(/^[^a-zA-Z$_]|[^a-zA-Z0-9$_]/g, "_");
                    let name = key;
                    if (keyClashProtection) {
                        let count = 0;
                        while (Reflect.has(target, name)) {
                            count += 1;
                            name = key + "_" + count;
                        }
                    }
                    Reflect.set(target, name, value);
                } else {
                    Reflect.set(target, key, value);
                }
                return true;
            },
            get(target: Accessor<T>, key: PropertyKey): T {
                if (typeof key != "string" || Reflect.has(target, key)) {
                    return Reflect.get(target, key);
                }

                const closestMatch = closest(key, Object.keys(target));
                if (closestMatch) {
                    raise(`Couldn't find property "${key}", did you mean "${closestMatch}"?`);
                } else {
                    raise(`Couldn't find property "${key}".`);
                }
            }
        });
    }

    *[Symbol.iterator](): IterableIterator<T> {
        for (const value of Object.values(this)) {
            yield value;
        }
    }

    /** @internal */
    [filterAndMap]<U>(filter: (value: T) => boolean, map: (value: T) => U): Accessor<U> {
        const accessor = new Accessor<U>();

        for (const [key, value] of Object.entries(this)) {
            if (filter(value)) {
                accessor[key] = map(value);
            }
        }

        return accessor;
    }

    [key: string]: T;
}
