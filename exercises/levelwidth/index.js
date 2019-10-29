// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	// Create 2 arrays, Counter: keep counter #node in each level, return this array
	// Counting: the array will do the actual counting of the #node in each level
	// create a stop indicator
	let counter = [];
	let counting = [];
	let stop = 'stop';

	// push root and stop to counting
	// push 0 to counter
	counting.push(root);
	counting.push(stop);
	counter.push(0);

	// while the length of counting is not 1
	while(counting.length > 1) {
		// if the first element of counting is stop, shift and push stop
		// if the first element of counting is stop, push a 0 to counter
		if (counting[0] === stop) {
			counting.shift()
			counting.push(stop);

			counter.push(0);
		}

		// take first node in counting, take all it's children and push to counting, increase the last element of counter by 1
		const first = counting.shift();
		counting.push(...first.children);
		counter[counter.length - 1] += 1;

	}

	// return counter
	return counter;
}

module.exports = levelWidth;
