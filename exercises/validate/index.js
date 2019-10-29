// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
	// for a node, anything left will have max of node.data, anything right will have min of node date
	// for any node, compare it to the min and max

	if (max !== null && node.data > max) return false;
	if (min !== null && node.data < min) return false;

	if (node.left && !validate(node.left, min, node.data)) return false;
	if (node.right && !validate(node.right, node.data, max)) return false;
 
	return true;
}

module.exports = validate;
