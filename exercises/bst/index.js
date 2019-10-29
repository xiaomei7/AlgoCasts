// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data, node = this) {
		// check the data is bigger or smaller than current node (default root)
		// checkout the node has corresponding child for left or right
		// if not, insert left or right
		// else, insert
		if (data > node.data) {
			if (node.right === null) {
				node.right = new Node(data);
				return;
			} else {
				node.insert(data, node.right);
			}
		} 

		if (data < node.data) {
			if (node.left === null) {
				node.left = new Node(data);
				return;
			} else {
				node.insert(data, node.left)
			}
		}
	}

	contains(data) {
		if (data === this.data) {
			return this;
		}

		if (data < this.data && this.left) {
			return this.left.contains(data);
		}

		if (data > this.data && this.right) {
			return this.right.contains(data);
		}

		return null;
	}
}

module.exports = Node;
