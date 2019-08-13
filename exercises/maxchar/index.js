// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	// dictionary
	let charFrequence = new Map();

	for(let char of str) {
		let isInDict = charFrequence.get(char);

		if(isInDict) {
			charFrequence.set(char, isInDict + 1);
		}
		else {
			charFrequence.set(char, 1);
		}
	}
	// the spread operator
	let mostFrequent = [...charFrequence.entries()].reduce((a, e) => e[1] > a[1] ? e : a);

	return mostFrequent[0];
}

module.exports = maxChar;
