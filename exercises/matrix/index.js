// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function* pickIndex(n) {
	// [shift, pop, shift, pop]
	// 1,2 means 0-4; 3,4 means 4-1
	const order = [1, 2, 3, 4];

	if (n >= 4) n = n - 4;

	while (n < 4) {
    	yield order[n++];
  	}
}

function generate_matrix(n, m) {
    let result = []
    for(let i = 0; i < n; i++) {
        result.push(new Array(m).fill(0))
    }
    return result
}

function matrix(n) {
	// create a n * n matrix
	let spiralMatrix = generate_matrix(n, n); // n x n matrix with value of 0
	let columnIndex = [...Array(n).keys()]; // 0 - n
	let rowIndex = [...Array(n).keys()]; // 0 - n
	let num = [...Array(n * n).keys()].map(num => num + 1).reverse(); // number to fill the matrix

	let fixIndexIs = 'Column';

	//ceither column index is the same or row index is the same
	for (let i = 0; i < n * 2; i++) {
		let nextFixedIndex, positiveOrNegative;
		const shiftOrPop = pickIndex(i).next().value;

		if (columnIndex.length >= rowIndex.length) {
			if (shiftOrPop === 1 || shiftOrPop === 4) {
				nextFixedIndex = columnIndex.shift();
			} else {
				nextFixedIndex = columnIndex.pop();
			}
		} else {
			if (shiftOrPop === 1 || shiftOrPop === 4) {
				nextFixedIndex = rowIndex.shift();
			} else {
				nextFixedIndex = rowIndex.pop();
			}
		}

		if (fixIndexIs === 'Column') {
			if (shiftOrPop === 1 || shiftOrPop === 2) {
				for (let j = 0; j < n; j++) {
					if (spiralMatrix[nextFixedIndex][j] === 0) {
						spiralMatrix[nextFixedIndex][j] = num.pop();
					}
				}
			} else {
				for (let j = n - 1; j >= 0; j--) {
					if (spiralMatrix[nextFixedIndex][j] === 0) {
						spiralMatrix[nextFixedIndex][j] = num.pop();
					}
				}
			}
		} else {
			if (shiftOrPop === 1 || shiftOrPop === 2) {
				for (let j = 0; j < n; j++) {
					if (spiralMatrix[j][nextFixedIndex] === 0) {
						spiralMatrix[j][nextFixedIndex] = num.pop();
					}
				}
			} else {
				for (let j = n - 1; j >= 0; j--) {
					if (spiralMatrix[j][nextFixedIndex] === 0) {
						spiralMatrix[j][nextFixedIndex] = num.pop();
					}
				}
			}
		}

		fixIndexIs = fixIndexIs === 'Column' ? 'Row' : 'Column';
	}

	return spiralMatrix;
}

console.log(matrix(5));

module.exports = matrix;
