// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		if (!this.head) return 0;

		let size = 0;
		let currentNode = this.head;

		while(currentNode) {
			currentNode = currentNode.next;
			size++;
		}

		return size;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) return null;

		let currentNode = this.head;

		while(currentNode) {
			if (!currentNode.next) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) return;
		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) return;
		if (!this.head.next) {
			this.head = null;
			return;
		}

		let currentNode = this.head;
		let previousNode;

		while(currentNode) {
			previousNode = currentNode;
			currentNode = currentNode.next;

			if (!currentNode.next) {
				previousNode.next = null;
				return;
			}
		}
	}

	insertLast(data) {
		const lastNode = this.getLast();

		if (lastNode) {
			lastNode.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}

	getAt(index) {
		let node = this.head;
		let counter = 0;

		while(node) {
			if (counter === index) {
				return node;
			}

			counter++;
			node = node.next;
		}

		return null;
	}

	removeAt(index) {
		// make sure the index is within 0 and the size of the linkedlist
		if (index < 0) return;

		let node = this.head;
		let counter = 1;
		let prevNode;

		while(node) {
			if (index === 0) {
				this.head = node.next;
				return;
			}

			prevNode = node;
			node = node.next;

			if (node && counter === index) {
				prevNode.next = node.next;
				return;
			}

			counter++;
		}
	}

	insertAt(data, index) {
		// if the index is out of bound, add the data at the end of the node

		if (index === 0) {
			this.insertFirst(data);
			return;
		}

		if (index < 0 || index >= this.size()) {
			this.insertLast(data);
			return;
		}

		const nextNode = this.getAt(index);

		this.getAt(index - 1).next = new Node(data, nextNode);

	}

	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while(node) {
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while(node) {
			yield node;
			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };


