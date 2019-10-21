// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
	constructor() {
		this.frontStack = new Stack();
		this.endStack = new Stack();
	}

	add(record) {
		this.frontStack.push(record);
	}

	remove() {
		if (!this.frontStack.peek() && !this.endStack.peek()) {
			return undefined;
		}

		if (this.endStack.peek()) {
			return this.endStack.pop();
		}

		while(this.frontStack.peek()) {
			this.endStack.push(this.frontStack.pop());
		}

		return this.endStack.pop();
	}

	peek() {
		if (!this.endStack.peek()) {
			while(this.frontStack.peek()) {
				this.endStack.push(this.frontStack.pop());
			}
		}

		return this.endStack.peek();
	}
}

module.exports = Queue;
