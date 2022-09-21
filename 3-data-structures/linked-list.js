/*

  Nodes are the data and pointers to the next node.
  Each node only knows about the next node in the list.

  const a = new Node('A'); // a only knows about b
  const b = new Node('B'); // b only knows about c
  const c = new Node('C');

  a.next = b;
  b.next = c;
  c.next = null; // tail node

  a => b => c => null

*/

class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
      this.head = head; // head node
      this.tail = null; // tail node (defaults to null)
      this.length = 0;
    }
   
    append(value) {
        let newNode = new Node(value);
        // if empty list (becomes first node in list - head)
        if (!this.head) {
          this.head = newNode;
          this.tail = this.head
        // not empty list, add node as the new tail node
        } else {
          this.tail.next = newNode;
          this.tail = newNode;
        }
        this.length +=1;
        return this;
      }

      deleteTail() {
        if (!this.head) return undefined;
        let current = this.head; // start at head node
        let newTail = current; 
        // loop while there is a next node (points to a node)
        while (current.next) {
          // reference current and next node 
          newTail = current; 
          current = current.next; 
        }
        this.tail = newTail;
        this.tail.next = null; // make node the tail 
        this.length -=1;
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }
        return current;
      }

      deleteHead() {
        if (!this.head) return undefined;
        let current = this.head; // reference head node
        this.head = current.next; // set new head (previous 2nd node)
        this.length -=1;
        return current;
      }

      prepend(value) {
        let newNode = new Node(value);
        // if empty list (node becomes head and tail)
        if (!this.head) {
          this.head = newNode;
          this.tail = this.head;
        } 
        // node becomes new head
        newNode.next = this.head;
        // node becomes new head (no matter if empty or not)
        this.head = newNode;
        this.length +=1;
        return this;
      }

      get(index) {
         if (index < 0 || index > this.length) return null;
         let counter = 0;
         let current = this.head;
         while (counter != index) {
            current = current.next; // moving to next node in list
            counter++;
         }
         return current;
      }

      set(index, value) {
        let foundNode = this.get(index);
        if (foundNode) {
          foundNode.value = value;
          return true;
        }
        return false;
      }

      insert(index, value) {
        if (value < 0 || index > this.length) return false;
        
        // add new node to end of list?
        if (index === this.length) {
          this.append(value);
          return true;
        }
        // add new node to beginning of list?
        if(index === 0) {
          this.prepend(value);
          return true;
        }
        // if not, add new node somewhere in the middle
        let newNode = new Node(value);
        
        // reference previous node to update next property 
        let prev = this.get(index - 1);
        
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
    
        this.length +=1;
        return true;
      }

      delete(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.deleteHead();
        if (index === this.length-1) return this.deleteTail();
    
        // reference previous node to access next property
        let prev = this.get(index -1);
        let removed = prev.next;
        prev.next = removed.next;
        
        this.length -=1;
        return removed;
      }
}

export {
    LinkedList,
}