// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reversePositiveInt(n) {
	// if the split takes no parameter, it returns the entire string! so provide empty '' to separate chars
	// n + "": quick way to turn number to string 
	// +: quick way to turn string to number
	return +(n + "").split('').reduce((acc, char) => char + acc);
}

function reverseInt(n) {
	if(n >= 0) {
		return reversePositiveInt(n);
	}
	return -reversePositiveInt(Math.abs(n));
}

module.exports = reverseInt;
