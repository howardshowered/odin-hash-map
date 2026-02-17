class Node {
    next = null;
    key = null;
    value = null;

    constructor(key, value) {
        this.key =key;
        this.value = value;
    }
    
}
export default class HashMap {
    #loadFactor = 0.75;
    #capacity = 16;
    #length = 0;
    #buckets = null;

    constructor(capacity = 16) {
        this.capacity = capacity;
        this.#buckets = new Array(this.#capacity);

    }

    hash(key, m) {

        let hashCode = 0;

        const primeNumber = 31;
        for(let i = 0; i< key.length; i ++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i) % m;

        }

        return hashCode;

    }

    set(key, value) {
        //if key exists , then the old value is overwritten
        if( this.#length > this.#capacity * this.#loadFactor) {
            //if length is larger than capacity then double capcity and create
            // a new HashMap with those values by setting them 
        }

        const bucketIndex = this.#getIndex(key);
        if ( this.buckets[bucketIndex]) {
            
        }

        



    }

    #getIndex (key) {
        return this.hash(key, this.#capacity);
    }

}

//@TODO add linked list and node classes