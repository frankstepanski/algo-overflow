class Stack {
    constructor() {
      this.storage = [];
      this.size = 0;
    }
  
    // adds value to stack
    push(value) {
      this.storage[this.size] = value;
      this.size += 1;
    }
  
    // retrieve value from stack
    // should return undefined if the stack is empty
    pop() {
      if (this.size === 0) {
        return undefined;
      }
  
      const popped = this.storage[this.size - 1];
      delete this.storage[this.size - 1];
      this.size -= 1;
  
      return popped;
    }
  
    // returns the object or value at the top of the stack without removing it
    // if the stack is empty, it should return undefined
    peek() {
      if (this.size === 0) {
        return undefined;
      }
  
      return this.storage[this.size - 1];
    }  
  }

class Queue {
    constructor() {
        this.storage = new Stack();
        this.aux = new Stack();
        this.size = 0;
      }
    
      // adds value to the queue
      enqueue(value) {
        this.storage.push(value);
        this.size += 1;
      }
    
      // retrieve the next item from the queue
      // should return undefined if the queue is empty
      dequeue() {
        while (this.storage.peek() !== undefined) {
          const top = this.storage.pop();
          this.aux.push(top);
        }
    
        const dequeued = this.aux.pop();
    
        while (this.aux.peek() !== undefined) {
          const top = this.aux.pop();
          this.storage.push(top);
        }
    
     
        return dequeued;
      }
    
      // returns the object or value at the front of the queue without removing it
      // if the queue is empty, it should return undefined
      peek() {
        if (this.size === 0) {
          return undefined
        }
    
        return this.storage.peek();
      }
    
}

export {
    Stack,
    Queue
}