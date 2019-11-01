// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	// summary: find the largest record, and move it to the right-hand side

	// 2 loops, the outer loop keeps track how short the need-to-sort subarray is
	// the inner loop does the actual sorting

	// inside inner loop, swap the element with the larger one on the right
	// for every inner loop, the largest record would be pushed to the right, hence the next loop deals with smaller size array
	// will keep looping even the array is already sorted. so it's an unefficient algorithm in general

	for(let sortedRecord = 0; sortedRecord < arr.length; sortedRecord++) {
		for (let i = 0; i < arr.length - sortedRecord - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}
		}
	}

	return arr;
}

function selectionSort(arr) {
	// summary: start at front, pick the lowest value among the rest of the selection

	// prove-me-wrong algorithm
	// one by one in the array, assume the record in the very index (assumedLowest) is the min value of the array
	// loop the remaining records, find the real indexOfMin
	// if the indexOfMin is not the same as the very index, swap them
	// continue the loop, increment assumedLowest, until it hits the end of the array
	let indexOfMin;

	for (let assumedLowest = 0; assumedLowest < arr.length; assumedLowest++) {
		indexOfMin = assumedLowest;

		// loop remaining
		for (let i = assumedLowest + 1; i < arr.length; i++) {
			if (arr[i] < arr[indexOfMin]) {
				indexOfMin = i;
			}
		}

		if (assumedLowest !== indexOfMin) {
			let lesser = arr[indexOfMin];
			arr[indexOfMin] = arr[assumedLowest];
			arr[assumedLowest] = lesser;
		}
	}

	return arr;

}

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}

	const half = Math.floor(arr.length / 2);
	const left = arr.slice(0, half);
	const right = arr.slice(half);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	// meger two sorted arr to one sorted arr

	// compare the first record of both left and right
	// shift the one that is smaller, to the returning arr
	// repeat until one of the arr is empty
	// push the remaining records of the other arr to the returing arr
	let result = [];

	while (left.length && right.length) {
		if (left[0] > right[0]) {
			result.push(right.shift());
		} else {
			result.push(left.shift());
		}
	}

	return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
