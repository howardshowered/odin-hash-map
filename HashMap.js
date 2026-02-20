class Node {
    next = null;
    key = null;
    value = null;

    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    
}

class LinkedList {
    head = null;
    tail = null;

    append(key, value) {
        const newNode = new Node(key, value);

        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    //removes node
    remove(key) {
        let curr = this.head;
        let prev = null;
        while( curr !== null)
        {
            if( curr.key === key)
            {
                if(prev === null) {
                    this.head = curr.next;
                    return;
                } else {
                    prev.next = curr.next;
                    return;
                }
            }
            prev = curr;
            curr = curr.next;
        } 
        return null;
    }

    //return node
    get(key) {
        let curr = this.head;
        while( curr !== null) {
            if( curr.key === key)
                return curr;
            curr = curr.next;
        }
        return null;

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
            //@TODO implement increasing capacity and copying of buckets.
            //if length is larger than capacity then double capcity and create
            // a new HashMap with those values by setting them 
        }

        const bucketIndex = this.#getIndex(key);

        if ( this.buckets[bucketIndex]) {
            const list = this.buckets[bucketIndex];
            if(list.get(key)) {
                const node = list.get(key);
                node.value = value;
            } else {
                list.append(key, value);
                this.#length++;
            }

            
        } else {
            const list = new LinkedList();
            list.append(key, value);
            this.#length++;
        }


    }

    #getIndex (key) {
        return this.hash(key, this.#capacity);
    }

    entries() {
        const tempArr = [];
        for( let list of this.#buckets) {
            if(list) {
                let currr = list.head;

                while (curr) {
                    tempArr.push([curr.key, curr.value]);
                    curr = cur.next;
                }
            }
        }
        return tempArr;
    }

}